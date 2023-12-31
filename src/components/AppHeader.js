import React, { useState } from 'react';
import { Badge, Button, Layout, Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import LoginModal from './LoginModal';
import Notification from './Notification'
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

// 네비게이션 메뉴 시작 

const items = [
  {
    label: '수집/취미',
    key: 'submenu1',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: '토이',
            key: 'Toy',
          },
          {
            label: '게임',
            key: 'Game',
          },
          {
            label: '음악',
            key: 'Music',
          },
          {
            label: '전자',
            key: 'Electronic',
          },
          {
            label: '기타',
            key: 'Etc',
          },
        ]
      }
    ]
  },
  {
    label: '자유게시판',
    key: 'submenu2',
    children: [
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 1',
            key: 'setting 1',
          },
          {
            label: 'Option 2',
            key: 'setting 2',
          },
          {
            label: 'Option 3',
            key: 'setting 3',
          },
        ]
      }
    ]
  },
  {
    label: '핫게시판',
    key: 'submenu3',
    children: [
      {
        type: 'group',
        label: 'Item 3',
        children: [
          {
            label: 'Option 1',
            key: 'setting 1',
          },
          {
            label: 'Option 2',
            key: 'setting 2',
          },
          {
            label: 'Option 3',
            key: 'setting 3',
          },
        ]
      }
    ]
  },
  {
    label: '중고장터',
    key: 'submenu4',
    children: [
      {
        type: 'group',
        label: 'Item 4',
        children: [
          {
            label: 'Option 1',
            key: 'setting 1',
          },
          {
            label: 'Option 2',
            key: 'setting 2',
          },
          {
            label: 'Option 3',
            key: 'setting 3',
          },
        ]
      }
    ]
  },
  {
    label: '공지사항/건의사항',
    key: 'submenu5',
    children: [
      {
        type: 'group',
        label: 'Item 5',
        children: [
          {
            label: '공지사항',
            key: 'setting 1',
          },
          {
            label: '건의사항',
            key: 'setting 2',
          },
        ]
      }
    ]
  },
]

// 네비게이션 메뉴 끝

// 네비게이션 바 시작

function AppHeader() {

  const [current, setCurrent] = useState('null');
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(100);


  const onClick = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  }

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
    setIsNotificationVisible(false);
  }

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
    setIsLoginFormVisible(false);
    setNotificationCount(0);
  }

  // 웹사이트 주요 컬러.
  const primaryColor = '#5D59FF'

  // 웹사이트 디자인.

  // 네비게이션바 디자인

  const headerStyle = {
    width: '100%',
    display: 'flex',
    padding: '0',
    paddingLeft: '9vw',
    alignItems: 'center',
    backgroundColor: primaryColor,
    fontFamily: 'Noto Sans KR, sans-serif',

  }

  // 로고 디자인
  const logoStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    fontSize: '30px',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    paddingRight: '5vw',
  }

  // 네비게이션바 메뉴 디자인
  const menuStyle = {
    backgroundColor: primaryColor,
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    color: 'white',
    borderBottom: 'none',
    paddingRight: '5vw',
  }

  // 네비게이션바 서브메뉴 디자인
  const subMenuStyle = {
    fontSize: '12px',
    fontFamily: 'Noto Sans KR, sans-serif',
  }

  // 네비게이션바 버튼 메뉴 디자인
  const btnConStyle = {
    whiteSpace: 'nowrap',
    backgroundColor: primaryColor,
    position: 'relative',
  }

  // 네비게이션바 버튼 디자인
  const btnStyle = {
    margin: '0.5rem',
    backgroundColor: primaryColor,
    fontSize: '20px'
  }

  // 로그인 드롭다운 디자인
  const loginDropdownStyle = {
    position: 'absolute',
    top: '4.5rem',
    paddingTop: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    left: '-4rem',
    borderRadius: '10px',
    display: isLoginFormVisible ? 'block' : 'none',
    backgroundColor: 'white',
    zIndex: 1,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  }

  // 알람 드롭다운 디자인
  const notificationDropdownStyle = {
    position: 'absolute',
    top: '4.5rem',
    left: '-10rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',

    borderRadius: '10px',
    display: isNotificationVisible ? 'block' : 'none',
    backgroundColor: 'white',
    zIndex: 1,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  }

  // 뱃지 스타일
  const badgeStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  };


  // 네비게이션 바 동작 설정 시작
  return (
    <Layout>
      <Header style={headerStyle}>
        {/* 로고 */}
        <Link to = "/" >
          <div style={logoStyle} >LOGO SELECTORS</div>
        </Link>

        {/* 메인 메뉴*/}
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={menuStyle}>

          {/*서브 메뉴*/}
          {items.map(item => (
            <SubMenu key={item.key} title={item.label} style={{ margin: '0 1vw' }}>
              {item.children[0].children.map(subItem => (
                <Menu.Item key={subItem.key} style={subMenuStyle}>{subItem.label}</Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>

        {/* 버튼 메뉴*/}
        <div style={btnConStyle}>

          {/*알람 버튼*/}
          <Badge count={notificationCount} style={badgeStyle}>
            <Button onClick={toggleNotification} type='primary' style={btnStyle}>
              <BellOutlined />
            </Button>
          </Badge>
          <div style={notificationDropdownStyle}>
            <Notification />
          </div>

          {/*로그인 버튼*/}
          <Button onClick={toggleLoginForm} type='primary' style={btnStyle}>
            <UserOutlined />
          </Button>
          <div style={loginDropdownStyle}>
            <LoginModal />
          </div>
        </div>
      </Header>
    </Layout>
  );
}

export default AppHeader;

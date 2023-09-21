import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { BellOutlined, UserOutlined } from '@ant-design/icons'

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

function Navbar() {

  const [current,setCurrent] = useState('null');
  const onClick = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  }

  // 웹사이트 주요 컬러.
  const primaryColor = '#5D59FF'

  // 웹사이트 디자인.
  const navBarStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: primaryColor,
    fontFamily: 'Noto Sans KR, sans-serif',
    height: '78px',
  }

  const headerStyle = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: primaryColor, 
    fontFamily: 'Noto Sans KR, sans-serif',
    height: '78px', 
  }

  const logoStyle = {
    color: 'white', 
    fontSize: '36px', 
    fontWeight: 700, 
    whiteSpace: 'nowrap', 
    paddingLeft: '7vw'
  }

  const menuStyle = {
    padding: '0 2vw', 
    backgroundColor: '#5D59FF', 
    fontFamily: 'Noto Sans KR, sans-serif', 
    fontSize: '19px', 
    color: 'white'
  }

  const buttonStyle = {
    margin: '10px', 
    backgroundColor: primaryColor, 
    fontSize: '24px'
  }

  // 네비게이션 바 동작 설정 시작

  // 호버링 했을 때 드롭다운 메뉴들이 글 위에 덮어씌워지는게 아닌 그냥 밑에 글을 강제로 내리는 걸로.

  return (
    <div className='Navbar' style={ navBarStyle }>
      <Layout className='layout'>
        <Header style={ headerStyle } >
          <div className='logo' style={ logoStyle }>LOGO SELECTORS</div>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={menuStyle}>
            {items.map(item => (
              <SubMenu key={item.key} title={item.label} style={{ margin: '0 2vw'}}>
                {item.children[0].children.map(subItem => (
                  <Menu.Item key={subItem.key} style = {{ fontFamily: 'Noto Sans KR, sans-serif'}}>{subItem.label}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
          <div className='Buttons' style={{ whiteSpace: 'nowrap', backgroundColor: primaryColor, paddingRight: '7vw' }}>              
            <Button type="primary" style={ buttonStyle }>
             <BellOutlined />
            </Button>          
            <Button type="primary" style={ buttonStyle }>
              <UserOutlined />
            </Button>
          </div>
        </Header>
      </Layout>
    </div>
  );
}

// 네비게이션 바 동작 설정 끝

export default Navbar;

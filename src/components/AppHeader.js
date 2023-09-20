import React, { useState } from 'react';
import { Button, Dropdown, Input, Layout, Menu, Checkbox } from 'antd';
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
        label: 'Item 1',
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
        label: 'Item 1',
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
        label: 'Item 1',
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
        label: 'Item 1',
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

// 네비게이션 바 동작 설정 시작

function Navbar() {

  const [current,setCurrent] = useState('null');
  const onClick = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  }

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleToggle = () => {
    setShowLoginForm(!setShowLoginForm);
  }

  return (
    <div className='Navbar' style={{ height: '78px', display: 'flex', alignItems: 'center', backgroundColor: '#5D59FF'}}>
      <Layout className='layout'>
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#5D59FF', fontFamily: 'Noto Sans KR, sans-serif'}}>
          <div className='logo' style={{ color: 'white', fontSize: '32px', fontWeight: 700, whiteSpace: 'nowrap', paddingLeft: '7vw'}}>LOGO SELECTORS</div>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ padding: '0 2vw', backgroundColor: '#5D59FF', fontFamily: 'Noto Sans KR, sans-serif', fontSize: '16px', color: 'white'}}>
            {items.map(item => (
              <SubMenu key={item.key} title={item.label} style={{ margin: '0 2vw'}}>
                {item.children[0].children.map(subItem => (
                  <Menu.Item key={subItem.key} style = {{ fontFamily: 'Noto Sans KR, sans-serif'}}>{subItem.label}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
          <div className='Buttons' style={{ whiteSpace: 'nowrap', backgroundColor: '#5D59FF', paddingRight: '7vw' }}>              
            <Button type="primary" style={{ margin: '10px', backgroundColor: '#5D59FF', fontSize: '20px'}}>
             <BellOutlined />
            </Button>
            {/*
            <Button type="primary" style={{ margin: '10px', backgroundColor: '#5D59FF', fontSize: '20px'}}>
              <UserOutlined />
            </Button>
            */}

          </div>
        </Header>
      </Layout>
    </div>
  );
}

// 네비게이션 바 동작 설정 끝

export default Navbar;

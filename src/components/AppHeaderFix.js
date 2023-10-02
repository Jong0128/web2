import React, { useState } from 'react';
import { Badge, Button, Layout, Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import LoginForm from './LoginForm';
import Notification from './Notification'
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import MenuItem from 'antd/es/menu/MenuItem';


function AppHeaderFix() {

  return (
    <div className='navbar'>
      <div>LOGO SELECTORS</div>
      <Menu mode='horizontal'>
        <Menu.Item>HOME</Menu.Item>
        <Menu.SubMenu title={<span>ITEMS</span>}>
          <Menu.ItemGroup title="1">
            <Menu.Item>Option1</Menu.Item>
            <Menu.Item>Option2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="2">
            <Menu.Item>Option1</Menu.Item>
            <Menu.Item>Option2</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

export default AppHeaderFix
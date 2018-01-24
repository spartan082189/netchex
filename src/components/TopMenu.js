import React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;

const TopMenu = () => {
  return (
    <nav>
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default TopMenu;
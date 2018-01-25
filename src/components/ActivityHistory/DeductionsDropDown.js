import React from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

const handleMenuClick = e => {
  message.info('Click on menu item.');
  console.log('click', e);
}

const DeductionsDropDown = ({ }) => {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }} size='large'>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  )
}

export default DeductionsDropDown;
import React from 'react';
import { Menu, Icon } from 'antd';

const TopMenu = () => {
  return (
    <nav>
      <Menu mode="horizontal">
        <Menu.Item key="people">
          PEOPLE
        </Menu.Item>
        <Menu.Item key="payroll">
          PAYROLL
        </Menu.Item>
        <Menu.Item key="time">
          TIME & ATTENDANCE
        </Menu.Item>
        <Menu.Item key="reports">
          REPORTS
        </Menu.Item>
        <Menu.Item key="apps">
          <Icon type="appstore" />
        </Menu.Item>
        <Menu.Item key="alerts">
          <Icon type="bell" />
        </Menu.Item>
        <Menu.Item key="profile">
          REPORTS
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default TopMenu;
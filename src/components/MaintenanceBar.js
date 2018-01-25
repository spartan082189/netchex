import React from 'react';
import { Row, Col, Icon, Menu } from 'antd';
import Logo from '../assets/images/logo.png';

const MaintenanceBar = () => {
  return (
    <section id='maintenance'>
      <Row>
        <Col span={8}>
          <div>
            <img src={Logo} alt='logo' className='logo' />
            <h1 className='heading'>Maintenance </h1>
          </div>
        </Col>
        <Col span={8} offset={8}>
          <a href='/' className='helpSupport'><Icon type="question-circle-o" /> HELP & SUPPORT</a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <nav>
            <Menu mode="horizontal" className='maintenanceMenu' selectedKeys={['payroll']}>
              <Menu.Item>
                System Tables
              </Menu.Item>
              <Menu.Item key='payroll'>
                Payroll
              </Menu.Item>
              <Menu.Item>
                Security
              </Menu.Item>
              <Menu.Item>
                Mass Update Import
              </Menu.Item>
              <Menu.Item>
                Human Resources
              </Menu.Item>
              <Menu.Item>
                Company Structure
              </Menu.Item>
            </Menu>
          </nav>
        </Col>
      </Row>
    </section>
  )
}

export default MaintenanceBar;

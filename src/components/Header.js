import React from 'react';
import { Row, Col } from 'antd';
import { CompanyAdminViewMenu, TopMenu, MaintenanceBar } from './';

const Header = () => {
  return (
    <header id="top-menu">
      <Row>
        <Col span={8}>
          <CompanyAdminViewMenu />
        </Col>
        <Col span={8} offset={8}>
          <TopMenu />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <MaintenanceBar />
        </Col>
      </Row>
    </header>
  );
}

export default Header;

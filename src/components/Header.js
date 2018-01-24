import React from 'react';
import { Row, Col } from 'antd';
import { CompanyAdminViewMenu, TopMenu } from './';

const Header = () => {
  return (
    <header id="top-menu">
      <Row>
        <Col span={6}>
          <CompanyAdminViewMenu />
        </Col>
        <Col span={6}>
          <TopMenu />
        </Col>
      </Row>
    </header>
  );
}

export default Header;

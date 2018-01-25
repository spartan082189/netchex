import React from 'react';
import { Menu, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;

const CompanyAdminViewMenu = () => {
  return (
    <section>
      <Row>
        <Col span={12}>
          <Menu mode='inline'>
            <SubMenu key="sub1" title={<span><span>132 - (DEMO) ABC Company</span></span>} />
          </Menu>
        </Col>
        <Col span={12}>
          <Menu mode='inline'>
            <SubMenu key="sub1" title={<span><span>ADMIN VIEW</span></span>} />
          </Menu>
        </Col>
      </Row>
    </section>
  )
}

export default CompanyAdminViewMenu;

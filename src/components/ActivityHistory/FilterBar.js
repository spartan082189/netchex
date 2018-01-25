import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { DeductionsDropDown } from './';

export default class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  handleFilters = () => {

  }

  render() {
    return (
      <div className='filterBar'>
        <Row>
          <Col span={3}>SHOWING:</Col>
          <Col span={5}><DeductionsDropDown /></Col>
          <Col span={5}>SHOWING:</Col>
          <Col span={5}>SHOWING:</Col>
          <Col span={3} offset={3}>SHOWING:</Col>
        </Row>
      </div>
    );
  }
}
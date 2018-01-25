import React, { Component } from 'react';
import './App.css';
import { Layout, Icon } from 'antd';
import { withLayout } from './hoc/';
import { FilterBar } from './components/ActivityHistory';
const { Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider collapsed={false}>
          <Icon type="right" />
        </Sider>
        <Layout className='appContent'>
          <Content>
            <header>
              <h2>Deductions Activity History</h2>
              <div className='deductionsBar'>
                <a className='backLink' href='/'><Icon type="bars" /> Back to Deductions</a>
                <a className='exportToExcel' href='/'><span className='exportBtn'><Icon type="close-square" /> EXPORT TO EXCEL</span></a>
              </div>
            </header>
            <section>
              <FilterBar />
            </section>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withLayout(App);

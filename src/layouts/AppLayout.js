import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';

class AppLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.any
}

export default AppLayout;
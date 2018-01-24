import React, { Component } from 'react';
import AppLayout from '../layouts/AppLayout';

export default (WrappedComponent) => {
  class withLayout extends Component {
    render () {
      return (
        <AppLayout>
          <WrappedComponent {...this.props} {...this.state} />
        </AppLayout>
      );
    }
  }
  return withLayout;
}
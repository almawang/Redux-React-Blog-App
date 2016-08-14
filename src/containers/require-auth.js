import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }
    componentWillUpdate(nextProps) {
      if (!this.nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }
    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }
  const mapStateToProps = (state) => ({
    authenticated: state.authenticated,
  });
  return connect(mapStateToProps, null)(RequireAuth);
}

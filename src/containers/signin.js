import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  onPassChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  onLogin(event) {
    this.props.signinUser(this.state);
  }
  render() {
    return (
      <div className="newbar">
        <input onChange={this.onEmailChange} placeholder="Email" />
        <input onChange={this.onPassChange} placeholder="Password" type="password" />
        <button onClick={this.onLogin}>Sign In</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps, { signinUser })(SignIn);

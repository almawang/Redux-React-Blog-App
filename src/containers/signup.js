import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fullname: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.onFullnameChange = this.onFullnameChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
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
  onFullnameChange(event) {
    this.setState({
      fullname: event.target.value,
    });
  }
  onSignUp(event) {
    this.props.signupUser(this.state);
  }
  render() {
    return (
      <div className="newbar">
        <input onChange={this.onEmailChange} placeholder="Email" />
        <input onChange={this.onFullnameChange} placeholder="Full Name" />
        <input onChange={this.onPassChange} placeholder="Password" type="password" />
        <button onClick={this.onSignUp}>Sign Up</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps, { signupUser })(SignUp);

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

const NavBar = (props) => {
  const signIn = () => {
    if (props.authenticated) {
      return (
        <div className="navbar">
          <Link to="/">AlmaBlog</Link>
          <Link to="posts/new">New Post</Link>
          <a href="" onClick={props.signoutUser}>Sign Out</a>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <Link to="/">AlmaBlog</Link>
          <Link to="posts/new">New Post</Link>
          <Link to="signin">Sign In </Link>
          <Link to="signup">Sign Up</Link>
        </div>
      );
    }
  };
  return (
    <div>
      {signIn()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps, { signoutUser })(NavBar);

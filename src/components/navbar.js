import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">AlmaBlog</Link>
      <Link to="posts/new">New Post</Link>
    </div>
  );
};

export default NavBar;

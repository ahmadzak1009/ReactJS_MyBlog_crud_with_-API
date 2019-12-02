import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"}>
          <span className="navbar-brand mb-0 h1">MyBlog</span>
        </Link>
        <Link to="/add-post" className="btn btn-primary">
          Add Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

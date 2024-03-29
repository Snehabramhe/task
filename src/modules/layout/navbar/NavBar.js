import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-dark ${props.color} navbar-expand-sm`}>
        <div className="container">
          <Link to="" className="navbar-brand">
           <i className="bi bi-phone"></i> {props.heading}
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/contacts/admin" className="nav-link px-2">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  );
};

export default NavBar;

import React from "react";
import { withRouter, Link } from "react-router-dom";
import './NavBar.styles.scss';
import logo from '../../assets/logo.png';

function NavBar({ match }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
        reener
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
              Login <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tickets">
              Tickets
            </Link>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/support">
                Nueva
              </Link>
              <Link className="dropdown-item" to="/ticket">
                Action
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/">
                Action
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/">
              Disabled
            </Link>
          </li>
        </ul>


      </div>
    </nav>
  );
}

export default withRouter(NavBar)
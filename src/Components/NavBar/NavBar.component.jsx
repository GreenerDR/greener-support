import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Greener
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
              <Link className="dropdown-item" to="/">
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

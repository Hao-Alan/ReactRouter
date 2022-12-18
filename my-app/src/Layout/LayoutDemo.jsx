import React, { Children } from "react";
import { Link } from "react-router-dom";

const LayoutDemo = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HomeTask
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/todoList">
                      Todo List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/todoListAgain"}>
                      Todo List Again
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/contact"}>
                      Todo List Redux
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default LayoutDemo;

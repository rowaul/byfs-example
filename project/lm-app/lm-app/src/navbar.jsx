import React, { Component } from "react";
import logo from "./logo.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light mb-3"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <a className="navbar-brand mb-2" href="https://google.com">
            <img src={logo} height="40" alt="" /> Farm Trust
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <form className="form-inline">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={this.props.handleLogin}
                >
                  Log in
                </button>
              </form>
              <a
                className="nav-item nav-link active"
                href="http://localhost:3000"
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

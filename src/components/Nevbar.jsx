import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Nevbar extends Component {
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      // eslint-disable-next-line
      var instances = M.Sidenav.init(elems);
    });
    return (
      <React.Fragment>
        <nav className="teal accent-4">
          <div className="nav-wrapper left-align">
            <a href="#!" className="brand-logo">
              Beat Maker
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#!">Help</a>
              </li>
              <li>
                <a href="#!">Donate</a>
              </li>
              <li>
                <a href="#!">Developer</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#!" className="left-align">
              Help
            </a>
          </li>
          <li>
            <a href="#!" className="left-align">
              Donate
            </a>
          </li>
          <li>
            <a href="#!" className="left-align">
              Deveoper
            </a>
          </li>
          <li>
            <a href="#!" className="left-align">
              About
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Nevbar;

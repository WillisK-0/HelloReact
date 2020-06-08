import React from "react";
import { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <>
        <div className="nav">
          <h1>HighOnCoding</h1>
          <nav className="navtag">
            <ul className="nav-items">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
export default Menu;

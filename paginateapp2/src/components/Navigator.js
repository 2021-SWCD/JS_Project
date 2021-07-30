import React, { Component } from "react";
import "./Navigator.css";

export default class Navigator extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="Nav">
            <span className="Nav_title">Citizen Blog</span>
            <div className="Navi">
              <a className="Navs" href="#intro">
                소개글
              </a>
              <a className="Navs" href="#cc">
                2cc
              </a>
              <a className="Navs" href="#wagle">
                와글와글
              </a>
              <a className="Navs" href="#coming">
                ...
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

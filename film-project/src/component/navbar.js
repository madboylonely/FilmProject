import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand ml-3" href="index.html">
            <img src="img/Logo.png" alt="#" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Trang Chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <a
              href="index.html"
              className="pr-3 d-flex align-items-center justify-content-center"
            >
              <i className="fa fa-user-circle text-muted" />
              <span className="text-muted d-inline-block ml-2">Đăng Nhập</span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

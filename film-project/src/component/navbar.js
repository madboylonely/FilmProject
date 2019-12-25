import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="film-nav">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <img src="./img/logo1.png" alt="logo" width="40px" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lịch Chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin Tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ứng Dụng</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-warning my-button">Đăng Nhập</button>
                </nav>
            </nav>
        );
    };
}
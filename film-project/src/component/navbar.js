import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"><img className="img-fluid" src="./img/logo.png" alt="logo" width="40px"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Cụm Rạp<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lịch Chiếu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tin Phim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Liên Hệ</a>
                        </li>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Tìm Phim" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm</button>
                        </form>
                        <button className="btn btn-danger">Đăng Nhập</button>
                    </ul>
                </div>
            </nav>
        );
    };
}
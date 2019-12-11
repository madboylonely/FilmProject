import React, { Component } from 'react';

export default class Carousel extends Component {
    render() {
        return (
            <div id="filmCarousel" className="carousel slide" data-ride="carousel">
                <div className="fixed"></div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/slide-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/slide-2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/slide-3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#filmCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#filmCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    };
}
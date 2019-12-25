import React, { Component } from 'react';

export default class Carousel extends Component {
    render() {
        return (
            <div className="film-carousel">
                <div id="carouselFilmIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselFilmIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselFilmIndicators" data-slide-to={1} />
                        <li data-target="#carouselFilmIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/slide-1.jpg" className="d-block w-100" alt="film-1" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/slide-2.jpg" className="d-block w-100" alt="film-2" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/slide-3.jpg" className="d-block w-100" alt="film-3" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselFilmIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselFilmIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        );
    };
}
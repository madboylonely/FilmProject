import React, {Component} from 'react';
import Navbar from "./navbar";
import Carousel from "./carousel";
import HomeTool from "./hometool";
import ShowTime from "./showtime";
import ListFilm from "./listfilm";
import News from "./news";
import Footer from "./footer";
import Header from './header';
import FilterFilm from './filterFilm';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <FilterFilm />
                <HomeTool />
                <ShowTime />
                <ListFilm />
                <News />
                <Footer />
            </div>
        );
    };
}
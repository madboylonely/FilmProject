import React, {Component} from 'react';
import Navbar from "./navbar";
import Carousel from "./carousel";
import HomeTool from "./hometool";
import ShowTime from "./showtime";
import ListFilm from "./listfilm";
import News from "./news";
import Footer from "./footer";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <HomeTool />
                <ShowTime />
                <ListFilm />
                <News />
                <Footer />
            </div>
        );
    };
}
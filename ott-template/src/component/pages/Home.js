import React, { useEffect } from "react";
import Banner from "../common/Banner";
import ThumbnailCarousal from "../common/ThumbnailCarousal";
import ThumbCaro from '../../data/ThumbCaro.js';

const Home = () => {
    
    return (
        <React.Fragment>
            <Banner/>
            <ThumbnailCarousal title={ThumbCaro.trading.title} data="trading"  />
            <ThumbnailCarousal title={ThumbCaro.popular.title} data="popular" />
            <ThumbnailCarousal title={ThumbCaro.mostlike.title} data="mostlike" />
        </React.Fragment>
    );
}
 
export default Home;
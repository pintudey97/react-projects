import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ImagePath } from '../../ImagePath';

class SliderPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.state= {
            responsive:{
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        }
      return(
            <React.Fragment>
                <OwlCarousel className="owl-theme" loop margin={10} nav autoplay={true} responsive={this.state.responsive}>
           <div class="item">
                <img src={ImagePath.Slider1} alt="slider-1" />
                <h4>Sloder 1</h4>
                <p>Use it if owl items are deep nested inside some generated content. 
                    E.g 'youritem'. Dont use dot before class name.</p>
           </div>
           <div class="item">
                <img src={ImagePath.Slider2} alt="slider-2" />
                <h4>Sloder 1</h4>
                <p>Use it if owl items are deep nested inside some generated content. 
                    E.g 'youritem'. Dont use dot before class name.</p>
           </div>
           <div class="item">
                <img src={ImagePath.Slider3} alt="slider-3" />
                <h4>Sloder 1</h4>
                <p>Use it if owl items are deep nested inside some generated content. 
                    E.g 'youritem'. Dont use dot before class name.</p>
           </div>
           <div class="item">
                <img src={ImagePath.Slider4} alt="slider-4" />
                <h4>Sloder 1</h4>
                <p>Use it if owl items are deep nested inside some generated content. 
                    E.g 'youritem'. Dont use dot before class name.</p>
           </div>
            
             </OwlCarousel>
            </React.Fragment>
      );
    }
  }



export default SliderPage;
import React from 'react';
import SliderPage from '../Common/slider';

// const sliderdata = [
//     {
//         title : "Ram Das"
//     },
//     {
//         title : "Rintu Koley"
//     }
// ]

const sliderdata = [
        {
            title : "Ram Das",
        },
        {
            title : "Rintu Koley",
        }
    ]

const About = () =>{
    return(
        <React.Fragment>
            {sliderdata.map((item, key) => 
                <SliderPage name={item.title} />
            )}
        </React.Fragment>
    )
}
export default About;
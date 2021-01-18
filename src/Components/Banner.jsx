import React, { useState } from 'react';
import Typewriter from './Typewriter';
import './Banner.css';
import moon1 from '../img/moon1.jpg';
import {colorCode} from '../variables';
import headshot1 from '../img/headshot1.jpg';

// class Banner extends Component {
//     state = {  }
//     render() { 
//         return (  
//             <div className="banner">
//                 <div className="container-fluid">
//                     {/* <Typewriter content={"lorem ipsum"} delta={150} waitPeriod={2000}></Typewriter> */}
                    
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default Banner;

export default function Banner(){
    return(
        <div className="banner-container container-fluid">
            <div className="banner row">
                <Typewriter content={"Hi, you can call me Chris."} delta={175} waitPeriod={2000} textColor={"#EEE"} bgColor={colorCode.dark}></Typewriter>
                {/* <div className="col-xs-12 col-md-9 col-lg-10">
                    <Typewriter content={"Hi, my name is Chris!"} delta={300} waitPeriod={2000} textColor={colorCode.bg} bgColor={colorCode.dark}></Typewriter>
                </div>
                <div className="col-xs-12 col-md-3 col-lg-2 ">
                    <img className="img-fluid avatar align-top" src={headshot1}></img>
                </div> */}
            </div>
        </div>
    )
}
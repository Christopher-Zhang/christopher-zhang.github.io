import React from 'react';
import Typewriter from './Typewriter';
import './Banner.css';
import {colorCode} from '../variables';

export default function Banner(){
    return(
        <div className="banner-container container-fluid">
            <div className="banner row">
                <Typewriter content={"Hi, you can call me Chris."} delta={175} waitPeriod={2000} textColor={"#EEE"} bgColor={colorCode.dark}></Typewriter>
            </div>
        </div>
    )
}
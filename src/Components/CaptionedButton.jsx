import React from 'react';
import { Link } from "react-router-dom";

export default function CaptionedButton(props){
    const backgroundColor = props.backgroundColor;
    const captionText = props.captionText;
    const buttonText = props.buttonText;
    const buttonLink = props.buttonLink;

    return (
        <div className="captioned-button">
            <div className="container-fluid jumbotron row py-5" style={{backgroundColor:backgroundColor}}>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10 col-xl-10 text-start text-md-end">
                    <p className="lead">{captionText}</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 text-start">
                    <Link to={buttonLink}><button className="btn btn-outline-secondary btn-lg">{buttonText}</button></Link>
                </div>
            </div>
        </div>
    );
}
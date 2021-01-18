import React from 'react';
import './Welcome.css';

export default function Welcome(props){
    const headerText = props.headerText;
    const details = props.details;
    const backgroundColor = props.backgroundColor;

    return(
        <div className="container-fluid padding" style={{backgroundColor:backgroundColor}}>
            <div className="welcome row text-center">
                <div className="col-12"> 
                    <h1 className="display-5 fw-normal">{headerText}</h1>
                </div>
                <hr></hr>
                <div className="col-12">
                    <p className="lead">{details}</p>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import sortingGIF from '../img/sorting-visualizer.gif';
import { Link, Route, Switch } from "react-router-dom";

export default function Preview(props){
    const backgroundColor = props.backgroundColor;
    return(
        <div className="preview container-fluid padding row justify-content-center" style={{backgroundColor:backgroundColor}}>
            <div className="col-3 card text-start mx-3" style={{width:"18rem"}}>
                <img src={sortingGIF} className="card-img-top invisible" alt="animated sorting visualizer"></img>
                <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">More projects coming soon!</p>
                    <button className="btn btn-primary disabled">Check it out!</button>
                </div>
            </div>
            <div className="col-3 card text-start mx-3" style={{width:"18rem"}}>
                <img src={sortingGIF} className="card-img-top" alt="animated sorting visualizer"></img>
                <div className="card-body">
                    <h5 className="card-title">Sorting Visualizer</h5>
                    <p className="card-text">Built with ReactJS. Includes <nobr>bubble sort,</nobr> insertion sort, and merge sort!</p>
                    <Link to="/projects/sorting-visualizer"><button className="btn btn-primary">Check it out!</button></Link>
                </div>
            </div>
            <div className="col-3 card text-start mx-3" style={{width:"18rem"}}>
                <img src={sortingGIF} className="card-img-top invisible" alt="animated sorting visualizer"></img>
                <div className="card-body">
                    <h5 className="card-title">Placeholder</h5>
                    <p className="card-text">More projects coming soon!</p>
                    <button className="btn btn-primary disabled">Check it out!</button>
                </div>
            </div>
        </div>
    );
}
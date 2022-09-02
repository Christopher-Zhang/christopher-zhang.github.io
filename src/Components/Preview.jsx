import React from 'react';
import sortingGIF from '../img/sorting-visualizer.gif';
import colordle from '../img/colordle.png';
import pokequiz from '../img/pokedex-quiz.png';
import { Link } from "react-router-dom";

export default function Preview(props){
    const backgroundColor = props.backgroundColor;
    return(
        <div className="preview container-fluid padding row justify-content-center" style={{backgroundColor:backgroundColor}}>
            <div className="col-3 card text-start mx-3" style={{width:"18rem"}}>
                <img src={pokequiz} className="card-img-top pb-4" alt="pokedex quiz"></img>
                <div className="card-body mt-4">
                    <h5 className="card-title">Pokedex Quiz</h5>
                    <p className="card-text">A Fun Pokedex Quiz</p>
                    <Link to="/projects/pokedex-quiz"><button className="btn btn-primary mt-5">Check it out!</button></Link>
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
                <img src={colordle} className="card-img-top" alt="colordle"></img>
                <div className="card-body">
                    <h5 className="card-title">Colordle</h5>
                    <p className="card-text">Wordle, but with hexcode color values!</p>
                    <Link to="/projects/colordle"><button className="btn btn-primary">Check it out!</button></Link>
                </div>
            </div>
        </div>
    );
}
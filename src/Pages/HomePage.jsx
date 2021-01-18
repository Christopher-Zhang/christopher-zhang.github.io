import React, { Component } from 'react';
import Typewriter from '../Components/Typewriter';
import Banner from '../Components/Banner';
import CaptionedButton from '../Components/CaptionedButton';
import { Link, Route, Switch } from "react-router-dom";
import Welcome from "../Components/Welcome";
import { colorCode } from '../variables';
import Preview from '../Components/Preview';
import Footer from '../Components/Footer';

class HomePage extends Component {
    state = {  };
    scheduleAnimations(){

    }
    render() {
        
        return (
            <div className="home-page">
                <Banner />
                <Welcome
                    backgroundColor={colorCode.offWhite}
                    headerText={"Welcome to my humble abode"} 
                    details={
                        <div>
                            I am currently a <b>sophomore</b> at the <b>University of Illinois at Urbana-Champaign</b> studying <b>electrical and computer engineering</b>. 
                            <br></br>I have experience programming in <b>Java, Python, C, and C++</b> from previous classes and my own pursuits. 
                            <br></br>Starting December 2020, I started learning various web technologies including: <b>HTML, CSS, Javascript, and ReactJS</b>. 
                            <br></br>This website will grow along with me as I grow as a developer.
                            <br></br>I hope you have a wonderful day.
                        </div>    
                    }
                ></Welcome>
                <CaptionedButton 
                    backgroundColor={colorCode.light}
                    captionText={
                        <div>
                            <b>Take a look at my most recent project: </b>
                            A sorting algorithm visualizer built with ReactJS.<br></br>
                            Currently implements bubble-sort, insertion-sort, and merge-sort.
                        </div>
                    }
                    buttonText={"Take me there"}
                    buttonLink={"/projects/sorting-visualizer"}
                ></CaptionedButton>
                <Welcome
                    backgroundColor={colorCode.offWhite}
                    headerText={"Projects"}
                ></Welcome>
                {/* <div className="preview-header container-fluid">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1 className="display-4">Projects</h1>
                        </div>
                        <hr></hr>
                    </div>
                </div> */}
                <Preview
                    backgroundColor={colorCode.offWhite}
                ></Preview>
                <Footer
                    backgroundColor={colorCode.dark}
                ></Footer>
                

                {/* <div className="container-fluid">
                    <div className="row jumbotron">
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                            <p className="lead">Test</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                            <Link to="/about">
                                <button type="button" className="btn btn-outline-secondary btn-lg">Click Me</button>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}
 
export default HomePage;
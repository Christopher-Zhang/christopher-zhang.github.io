import React, { Component } from 'react';
import Typewriter from '../Components/Typewriter';
import Banner from '../Components/Banner';
import { Link, Route, Switch } from "react-router-dom";
import Welcome from "../Components/Welcome";
import { colorCode } from '../variables';
class HomePage extends Component {
    state = {  };
    scheduleAnimations(){

    }
    render() {
        
        return (
            <div className="home-page">
                <Banner />
                <div className="container-fluid jumbotron row py-5" style={{backgroundColor:colorCode.light}}>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-8 text-start text-md-end">
                        <h1 className="display-5">This site is under construction</h1>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 text-start">
                        <button className="btn btn-outline-secondary btn-lg">I am a button!</button>
                    </div>
                </div>
                <Welcome
                    headerText={"Hello and welcome"} 
                    details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ex mattis, mattis lacus vel, vestibulum nisi. Integer nec vestibulum nunc. Integer ultricies nulla dolor, sed hendrerit justo cursus in. Quisque vehicula metus ipsum, ac vehicula risus venenatis sed. Phasellus dui mauris, mattis tincidunt vulputate at, aliquet ac mauris. Pellentesque imperdiet dignissim lacus in pretium. Vivamus arcu nibh, pharetra non ex non, varius maximus neque. Integer lobortis at turpis eu faucibus. Sed ultricies bibendum lorem, vitae convallis purus dapibus quis. Nullam nec mi ac lacus accumsan placerat a fermentum neque. Donec id elementum est. Orci varius natoque penatibus et magnis."}
                ></Welcome>
                

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
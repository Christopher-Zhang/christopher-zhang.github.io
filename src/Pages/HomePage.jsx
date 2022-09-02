import React, { Component } from 'react';
import Banner from '../Components/Banner';
import CaptionedButton from '../Components/CaptionedButton';
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
                    headerText={"Welcome to my website!"} 
                    details={
                        <div>
                            I am currently a <b>Senior</b> at the <b>University of Illinois at Urbana-Champaign</b>,
                            <br/> graduating with a <b>B.S</b> in <b>Computer Engineering</b> in <b>December 2022</b>. 
                            <br/>
                            <br/>I have industry experience using <b>Java</b>, <b>JavaScript</b>, <b>TypeScript</b>, as well as using <b>ReactJS</b> and various <b>AWS services</b> from my internships.
                            <br/><br/>I also have experience using <b>Python</b>, <b>C</b>, and <b>C++</b> from my other personal and class projects.
                            <br/>
                        </div>    
                    }
                ></Welcome>
                <CaptionedButton 
                    backgroundColor={colorCode.light}
                    captionText={
                        <div>
                            <b>Take a look at my most recent project: </b>
                            A Pokedex Quiz that uses <a href="https://pokeapi.co/" target='_blank'>https://pokeapi.co/</a><br></br>
                        </div>
                    }
                    buttonText={"Take me there!"}
                    buttonLink={"/projects/pokedex-quiz"}
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
            </div>
        );
    }
}
 
export default HomePage;
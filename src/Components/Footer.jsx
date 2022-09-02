import React from 'react';
import './Footer.css';

export default function Footer(props){
    const backgroundColor = props.backgroundColor;
    return(
        <footer className="bg-dark">
            <div className="container-fluid">
            <div class="row text-center justify-content-center">
                <div class="col-md-4">
                    <h1 className="display-5">Contact me</h1>
                    <hr class="light"></hr>
                    <p>chrisconcord@gmail.com</p>
                </div>
                <div class="col-md-4">
                    <h1 className="display-5">Socials</h1>
                    <hr class="light"></hr>
                    <a className="text-decoration-none" href="https://github.com/christopher-zhang"><p>Github</p></a>
                    <a className="text-decoration-none" href="https://linkedin.com/in/christopher-z-zhang"><p>LinkedIn</p></a>
                </div>
            </div>
            </div>
        </footer>
    );
}
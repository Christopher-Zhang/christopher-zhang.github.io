import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch } from "react-router-dom";
import './Navbar.css';
import 'bootstrap/dist/js/bootstrap.js';
class Navbar extends Component {
    state = {};
    render() { 
        return (  
            // <div className="container-fluid bg-dark">
                <nav role="navigation" className="navbar navbar-expand-lg bg-dark navbar-dark py-3 px-sm-4 px-lg-5 sticky-top"> 
                    <h1><Link className="navbar-brand ps-sm-5 ps-4" to="/">Christopher Zhang</Link></h1>
                    <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end pe-sm-5 pe-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href='#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <div className="dropdown-menu dropdown-menu-md-end">
                                    <Link className="dropdown-item" to="/projects/sorting-visualizer">Sorting Algorithm Visualizer</Link>
                                    <Link className="dropdown-item">Project 2</Link>
                                    <Link className="dropdown-item">Project 3</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="../files/Resume Website Ver.pdf" target="_blank">Résumé</a>
                            </li>

                        </ul>                    
                    </div>
                </nav>
            // </div>
        );
    }
}
 
export default Navbar;
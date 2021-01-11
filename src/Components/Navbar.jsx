import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/js/bootstrap.js';
class Navbar extends Component {
    state = {};
    render() { 
        return (  
            <div className="row mb-md-3">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">CZ</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Home</Link>
                                    {/* <Link to="/">Home</Link> */}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">About Me</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="files/Resume Website Ver.pdf" target="_blank">Résumé</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href='#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projects
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/projects/sorting-visualizer">Sorting Algorithm Visualizer (WIP)</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;
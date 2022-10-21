
import React from 'react';
import ColordleBoard from '../Components/Colordle/ColordleBoard.jsx';
import './Colordle.css';
import color_wheel from '../img/color_wheel.png';
import { HELP_CONTENT } from '../constants/colordle-constants.jsx';

function ColordlePage() {
    return (
        <div className="colordle-page">
            <header className="colordle-header">
                <div><b>Colordle</b></div>
                <img src={color_wheel} className="Color-wheel" alt="color-wheel" />
            </header>
            <ColordleBoard></ColordleBoard>
            <div className="modal fade" id="help-modal" tabindex="-1" aria-labelledby="help-modal-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="help-modal-label">How to Play</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {HELP_CONTENT}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColordlePage;
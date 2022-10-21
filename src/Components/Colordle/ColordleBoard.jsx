import React, { Component } from 'react';
import {COLOR_LENGTH, NUM_GUESSES, KEYCODES, FEEDBACK, COLORS} from '../../constants/colordle-constants';
import {setSeed, getContrastColor, arrayEquals, preventFocus} from '../../util/colordle-helpers';
import ColordleTile from './ColordleTile';


/**
 * The game-board for Colordle
 */
class ColordleBoard extends Component {
    constructor(props) {
        super(props);
        let vt = [];
        let ct = [];
        for (let i = 0; i < COLOR_LENGTH; i++) {
            vt[i] = Array(NUM_GUESSES).fill('');
            ct[i] = Array(NUM_GUESSES).fill(FEEDBACK.gray);
        }
        this.state = {
            valueTable: vt,
            colorTable: ct,
            row: 0,
            index: 0,
            currentColorIndex: 1
        };
    }
    render() {
        let num = Number("0x" + this.state.color);
        return (
            <div className="colordle">
                <div className="color-display" style={{ backgroundColor: "#" + this.state.color, color: (getContrastColor(num)) }}>
                    Current Color: {this.state.currentColorIndex}
                </div>
                <div className="feedback-box"></div>
                <div className="guess-board">
                    {this.state.valueTable.map((value, index) => (
                        <div className={'row-' + index} style={{ display: "flex" }} key={index}>
                            {value.map((val, i) => (
                                <ColordleTile className={"tile-" + i} value={this.state.valueTable[index][i]} color={COLORS[this.state.colorTable[index][i]]} key={i}>
                                    {val}
                                </ColordleTile>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="button-section">
                    {/* <button onClick={() => this.generateHexColor(this.getSeed(--this.state.currentColorIndex))}>Prev Color</button> */}
                    
                    <button className="btn btn-primary" tabIndex={-1} onClick={() => this.clearBoard()} onFocus={(e) => {preventFocus(e)}}>Clear</button>
                    <button className="btn btn-primary" tabIndex={-1} onClick={() => this.submitGuess()} onFocus={(e) => {preventFocus(e)}}>Submit</button>
                    <button className="btn btn-primary" tabIndex={-1} onClick={() => this.changeColor(1)} onFocus={(e) => {preventFocus(e)}}>Next Color</button>
                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#help-modal" tabIndex={-1} onFocus={(e) => {preventFocus(e)}}>Help</button>
                </div>
            </div>
        );
    }

    /**
     * Generate the initial color
     * Setup keyhandler
     */
    componentDidMount() {
        this.setState({ color: this.generateHexColor(this.getSeed(this.state.currentColorIndex)) });
        document.addEventListener('keydown', this.keyboardHandler.bind(this));
    }

    /**
     * Generates a pseudo-random number
     * based on the current date
     * @param {Number} modifier 
     * @returns Number: seed
     */
    getSeed(modifier) {
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        let seed = day.toString() + month.toString() + year.toString();
        return Number(seed) * modifier;
    }

    /**
     * Generates a random color based on a given seed
     * @param {Number} seed 
     * @returns String: hexadecimal color string
     */
    generateHexColor(seed) {
        this.clearBoard();
        let random = setSeed(seed);
        let num = Math.floor(random() * 16777216);
        let hexString = num.toString(16);
        let str = "";

        // Pad with zeros if not full 6 digits
        if (hexString.length < COLOR_LENGTH) {
            let diff = COLOR_LENGTH - hexString.length;
            for (let i = 0; i < diff; i++) {
                str += "0";
            }
        }
        hexString = str + hexString;
        hexString = this.reorderColorString(hexString);
        this.setState({ color: hexString });
        return hexString;
    }

    /**
     * 
     * @param {String} hex 
     * @returns String: new hex color string
     */
    reorderColorString(hex) {
        return hex[2] + hex[5] + hex[0] + hex[4] + hex[1] + hex[3];
    }

    /**
     * Checks a guess against the solution,
     * 
     * @param {String[]} guess 
     * @returns String[]
     */
    checkGuess(guess) {
        if (!guess || guess.length !== COLOR_LENGTH || this.state.index !== COLOR_LENGTH) {
            return null;
        }
        let color = this.state.color;
        let ret = Array(COLOR_LENGTH).fill(FEEDBACK.silver);
        let guessesUsed = Array(COLOR_LENGTH).fill(false);
        let colorsUsed = Array(COLOR_LENGTH).fill(false);

        // check strict matches (GREEN)
        for (let i = 0; i < COLOR_LENGTH; i++) {
            if (guess[i].toLowerCase() === color[i].toLowerCase()) {
                ret[i] = FEEDBACK.green;
                guessesUsed[i] = true;
                colorsUsed[i] = true;
            }
        }

        // check loose matches (YELLOW)
        for (let i = 0; i < COLOR_LENGTH; i++) {
            if (guessesUsed[i]) continue;
            for (let j = 0; j < COLOR_LENGTH; j++) {
                if (colorsUsed[j] || j === i) continue;
                if (guess[i].toLowerCase() === color[j].toLowerCase()) {
                    ret[i] = FEEDBACK.yellow;
                    guessesUsed[i] = true;
                    colorsUsed[j] = true;
                }
            }
        }
        return ret;
    }

    /**
     * Returns the Tile component at the given coordinate.
     * @param {Number} x 
     * @param {Number} y 
     * @returns Tile
     */
    getTileByCoordinate(x, y) {
        return document.getElementsByClassName('row-' + x)[0].getElementsByClassName('tile-' + y)[0];
    }

    /**
     * Handles keyboard input, acts as dispatch function
     * A-F and 0-9 is handled as text input
     * ENTER submits the current row
     * BACKSPACE or DELETE deletes
     * @param {KeyboardEvent} e 
     */
    keyboardHandler(e) {
        let code = e.which;
        if ((KEYCODES["0"] <= code && code <= KEYCODES["9"]) || (KEYCODES["A"] <= code && code <= KEYCODES["F"])) {
            this.handleInput(String.fromCharCode(code));
        }
        if (code === KEYCODES["ENTER"]) {
            this.submitGuess();
        }
        if (code === KEYCODES["BACKSPACE"] || code === KEYCODES["DELETE"]) {
            this.deleteOne();
        }
    }

    /**
     * Handles the input character
     * Updates the board state 
     * @param {String} guessCharacter single character guess
     */
    handleInput(guessCharacter) {
        let y = this.state.row;
        let x = this.state.index;
        if (y >= NUM_GUESSES || x >= COLOR_LENGTH) {
            return;
        }
        this.setTile(x, y, guessCharacter, null);
        this.setState({ index: x + 1 });
    }

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} value 
     * @param {Number} color 
     * @returns 
     */
    setTile(x, y, value, color) {
        if (x >= COLOR_LENGTH || y >= NUM_GUESSES)
            return;
        let state = {};
        if (value !== null) {
            state.valueTable = this.state.valueTable;
            state.valueTable[y][x] = value;
        }
        if (color !== null) {
            state.colorTable = this.state.colorTable;
            state.colorTable[y][x] = color;
        }
        this.setState(state);
    }

    /**
     * Deletes one character from the current guess row
     */
    deleteOne() {
        let y = this.state.row;
        let x = this.state.index;
        if (y < 0 || x <= 0) {
            return;
        }
        this.setTile(x - 1, y, '', null);
        this.setState({ index: x - 1 });
    }

    /**
     * Changes the color index by `increment`
     * @param {Number} increment 
     */
    changeColor(increment) {
        let newIndex = this.state.currentColorIndex + increment;
        this.setState({currentColorIndex: newIndex});
        this.generateHexColor(this.getSeed(newIndex));
    }

    /**
     * Evaluates the current row against the answer
     * Updates the game board to reflect strict and loose matches
     * Fails if the row is not full
     */
    submitGuess() {
        let feedback = this.checkGuess(this.state.valueTable[this.state.row]);
        if (!feedback) return;
        // update
        let state = { colorTable: this.state.colorTable };
        state.colorTable[this.state.row] = feedback;
        state.row = this.state.row + 1;
        let correct = arrayEquals(feedback, Array(COLOR_LENGTH).fill(FEEDBACK.green));
        let message = "";
        if (correct) {
            message = "Correct! The color was: " + this.state.color;
            state.row = NUM_GUESSES;
        }
        if (state.row >= NUM_GUESSES) {
            state.row = NUM_GUESSES;
            if (!correct) {
                message += "Incorrect! The color was: " + this.state.color;
            }
            let box = document.getElementsByClassName("feedback-box")[0]
            if (box) box.innerHTML = message;
        }
        state.index = 0;
        this.setState(state);
    }

    /**
     * Clears the board of all guesses
     */
    clearBoard() {
        let vt = [];
        let ct = [];
        for (let i = 0; i < COLOR_LENGTH; i++) {
            vt[i] = Array(NUM_GUESSES).fill('');
            ct[i] = Array(NUM_GUESSES).fill(FEEDBACK.gray);
        }
        let box = document.getElementsByClassName("feedback-box")[0];
        if (box) box.innerHTML = '';
        this.setState({ colorTable: ct, valueTable: vt, row: 0, index: 0 });
    }
}

export default ColordleBoard;
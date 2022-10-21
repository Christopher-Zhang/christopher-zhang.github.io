import React, { Component } from 'react';

/**
 * Tile class for Colordle board. 
 * Displays character and changes colors according to rules of Colordle.
 */
class ColordleTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            value: props.value
        }
    }
    render() {
        let TILE_STYLE = {
            height: "40px",
            width: "40px",
            backgroundColor: this.state.color,
            margin: "2px",
            borderStyle: "solid",
            borderColor: "black",
            color: "black",
            textAlign: "center"
        };
        return (
            <input style={TILE_STYLE} className={this.props.className} value={this.state.value} type="text"></input>
        );
    }
    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value || prevProps.color !== this.props.color) {
            this.setState({ value: this.props.value, color: this.props.color });
        }
    }
}

export default ColordleTile;
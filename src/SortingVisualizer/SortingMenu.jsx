import React, { Component } from 'react';

const SPEEDS = [100,75,50,25,10];
class SortingMenu extends Component {
    constructor(props){
        super(props);
        this.handleSpeedChange = this.handleSpeedChange.bind(this);
        this.state = {
            parent: props.parent,
            id: props.id,

        };
    }
    handleSpeedChange = (speed) => {
        let {parentHandleSpeedChange} = this.props;
        console.log(speed);
        parentHandleSpeedChange(speed);
    }
    render() { 
        let {parent} = this.state;
        let {id} = this.state;
        // return <div></div>;
        const speedSliderID = "speed-slider-" + id;
        const sliderID = "slider-" + id;
        return ( 
            <div className="row justify-content-center">
                <div className="col-3">
                    <button className="mb-2" onClick={()=> parent.newArray(parent.state.array.length)}>New Array</button><br></br>
                    <button onClick={()=> parent.bubbleSort()}>Bubble Sort</button>
                    <button onClick={()=> parent.insertionSort()}>Insertion Sort</button>
                    <button onClick={()=> parent.mergeSort()}>Merge Sort</button>
                    <br></br>
                    <div className={sliderID}>
                        <label for={speedSliderID} className="form-label">Speed</label>
                        <input 
                            type="range" 
                            className="form-range" 
                            id={speedSliderID} 
                            min="0" 
                            max="4" 
                            step="1" 
                            onChange={()=> {
                                let slider = document.getElementById(speedSliderID);
                                this.handleSpeedChange(slider.value);
                            }}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SortingMenu;
import React, { Component } from 'react';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import '../SortingVisualizer/SortingVisualizer.css';

class SortingVisualizerPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            instances: 1,
        }
    }

    render() { 
        const {instances} = this.state;
        let arr = [];
        for(let i = 0; i < instances; i++){
            arr.push(i);
        }
        return (
            <div className='sorting-visualizer-page container-fluid mt-5'>

                {/* <SafeNavBar></SafeNavBar> */}
                <div className=''>
                        {arr.map((value,index) => (
                            <SortingVisualizer
                                className="col"
                                id={value}
                                key={index}
                                length="25"
                            ></SortingVisualizer>
                        ))} 
                    
                </div>
            </div>
        );
    }
}
 
export default SortingVisualizerPage;
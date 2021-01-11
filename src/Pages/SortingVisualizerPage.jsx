import React, { Component } from 'react';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';

class SortingVisualizerPage extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <div className='justify-content-center'>
                <SortingVisualizer id="a"></SortingVisualizer>
                <SortingVisualizer id="b"></SortingVisualizer>
                 
            </div>
        );
    }
}
 
export default SortingVisualizerPage;
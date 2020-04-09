import React, { Component } from 'react'; 
import './sortingVisualizer.css';

let array_size = 200;
const primary = 'turquoise'

export default class sortingVisualizer extends Component {
    constructor(props) {
        super(props)
        this.state = {array: [],}
    }

    componentDidMount() {
        this.resetArrayValues();
      }

    // Reset the values that the array holds 
    resetArrayValues() {
        const array = []
        for(let i = 0; i < array_size; i++) {
            array.push(randomIntFromInterval(5, 730))
        }
        this.setState({array})
    } 

    UpdateArraySize(newvalue) { 
        array_size = newvalue
        this.resetArrayValues()
    }

    selectionSort() {

    }

    bubbleSort() {

    }

    mergeSort() {

    }

    quickSort() {

    }

    calculateWidth() {
        if(array_size < 40)
            return 25
        if(array_size < 80)
            return 15
        if(array_size < 120)
            return 10
        if(array_size < 160)
            return 7
        if(array_size <= 200)
            return 5
    }

    render() {
        const {array} = this.state

        return (
            <div>
                <div class = "nav-bar">
                    <span>
                        <button onClick={() => this.resetArrayValues()}>Generate New Array</button>
                    </span>
                    <span class = "vertical-line" />
                    <span>
                        <button onClick={() => this.selectionSort()}>Change Array Size and Sorting Speed</button>    
                        <input class = "slider" type = "range" id = "test" min = "4" max = "200" step = "1" onInput={() => this.UpdateArraySize(test.value) }/> 
                    </span>
                    <span class = "vertical-line" />
                    <span>
                        <button onClick={() => this.selectionSort()}>Selection Sort</button>
                        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                        <button onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button onClick={() => this.quickSort()}>Quick Sort</button>
                    </span>
                    <span class = "vertical-line" />
                    {/*
                    <button onClick={() => this.testSortingAlgorithms()}>Sort (BROKEN)</button>
                    */}
                </div>
                <div className = "array-container">
                    {array.map((value, idx) => (
                        <div className = "array-bar"
                            key = {idx}
                            style = {{
                            backgroundColor: primary,
                            width: this.calculateWidth(),
                            height: `${value}px`,}}>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        function randomIntFromInterval(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
import React, { Component } from 'react'; 
import './sortingVisualizer.css';

const array_size = 200;
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

    selectionSort() {

    }

    bubbleSort() {

    }

    mergeSort() {

    }

    quickSort() {

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
                        <input class = "slider" type = "range" min = "4" max = "100" id = "my-range"></input>
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
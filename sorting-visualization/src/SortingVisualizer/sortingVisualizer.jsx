import React, { Component } from 'react'; 
import './sortingVisualizer.css';
import {getSelectionSortAnimations} from '../SortingAlgorithms/selectionSort'; 
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort'; 
import {getMergeSortAnimations} from '../SortingAlgorithms/mergeSort';

let array_size = 200;
const primary = 'turquoise'
const secondary = 'red'
const animationSpeed = 1

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
        const animations = getSelectionSortAnimations(this.state.array)
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar')
          const [barOneIdx, barTwoIdx, swapIdx] = animations[i]
          if (swapIdx < 2) {
            const barTwo = arrayBars[barTwoIdx]
            const color = swapIdx % 2 === 0 ? secondary: primary
            setTimeout(() => {
                barTwo.style.backgroundColor = color
            }, 20 * i * animationSpeed)
          } else {
            setTimeout(() => {
                if(swapIdx === 2) {
                    const [barOneIdx, height1] = animations[i]
                    const barOne = arrayBars[barOneIdx]
                    barOne.style.height = `${height1}px`
                } else {
                    const [height2, barTwoIdx] = animations[i]
                    const barTwo = arrayBars[barTwoIdx]
                    barTwo.style.height = `${height2}px`
                }
            }, 20 * i * animationSpeed)
          }
        }
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array)
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')
            const [barOneIdx, barTwoIdx, swapIdx] = animations[i]
            if(swapIdx === 0) {
                const barOne = arrayBars[barOneIdx]
                const barTwo = arrayBars[barTwoIdx]
                setTimeout(() => {
                    barOne.style.backgroundColor = secondary
                    barTwo.style.backgroundColor = secondary
                  }, 20 * i * animationSpeed)
            } else if(swapIdx === 2 || swapIdx === 3) {
                setTimeout(() => {
                    if(swapIdx === 2) {
                        const [barOneIdx, height1] = animations[i]
                        const barOne = arrayBars[barOneIdx]
                        barOne.style.height = `${height1}px`
                    } else {
                        const [height2, barTwoIdx] = animations[i]
                        const barTwo = arrayBars[barTwoIdx]
                        barTwo.style.height = `${height2}px`
                    }
                }, 20 * i * animationSpeed)
            } else {
                const barOne = arrayBars[barOneIdx]
                const barTwo = arrayBars[barTwoIdx]
                setTimeout(() => {
                    barOne.style.backgroundColor = primary
                    barTwo.style.backgroundColor = primary
                }, 20 * i * animationSpeed)
            }
        }
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array)
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar')
          const isColorChange = i % 3 !== 2
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i]
            const barOne = arrayBars[barOneIdx]
            const barTwo = arrayBars[barTwoIdx]
            const color = i % 3 === 0 ? secondary: primary
            setTimeout(() => {
              barOne.style.backgroundColor = color
              barTwo.style.backgroundColor = color
            }, 20 * i * animationSpeed)
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i]
              const barOne = arrayBars[barOneIdx]
              barOne.style.height = `${newHeight}px`
            }, 20 * i * animationSpeed)
          }
        }
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
                        <button>Change Array Size and Sorting Speed</button>    
                        <input class = "slider" type = "range" id = "test" min = "4" max = "200" step = "1" onInput={() => this.UpdateArraySize(test.value)} value = {array_size} /> 
                    </span>
                    <span class = "vertical-line" />
                    <span>
                        <button onClick={() => this.selectionSort()}>Selection Sort</button>
                        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                        <button onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button onClick={() => this.quickSort()}>Quick Sort</button>
                    </span>
                    <span class = "vertical-line" />
                </div>
                <div className = "array-container">
                    {array.map((value, idx) => (
                        <div className = "array-bar"
                            key = {idx}
                            style = {{
                            backgroundColor: primary,
                            width: this.calculateWidth(),
                            height: `${value}px`,}}>
                            {/*{value}*/} 
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
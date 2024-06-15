import React from 'react';
import './Button.css';

function Button (props) {
  return (
    <div className="buttons-bar">
        <button onClick={()=> props.generateNewArray()} 
        id="reset">
          Generate New Array
        </button>
        <button
          id="bubbleSortButton"
          className="buttonStyle1"
          onClick={()=> props.bubblesort()}
        >
          Bubble Sort
        </button>
        <button
          id="selectionSortButton"
          className="buttonStyle2"
          onClick={()=> props.selectionsort()}
          
        >
          Selection Sort
        </button>
        <button
          id="insertionSortButton"
          className="buttonStyle1"
          onClick={()=> props.insertionsort()}
        >
          Insertion Sort
        </button>
</div>
  )
}

export default Button
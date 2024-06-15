import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Button from '../Buttons/Button';
import './Sorting.css'
import ArrayBar from '../ArrayBar/ArrayBar';
import Ranges from '../Ranges/Ranges';
import BubbleSort from './Algorithms/BubbleSort.js';
import { useState } from 'react';
import SelectionSort from './Algorithms/SelectionSort.js';
import InsertionSort from './Algorithms/InsertionSort.js';

function Sorting() {

  const [array,setarray]=useState([]);
  const [noofbars,setnoofbars]=useState(8);
  const [speed,setspeed]=useState(50);

  const randomIntFromInterval = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min;

  }

  const generateNewArray= ()=>{
    const newArray=[];
    for(let i=1;i<noofbars;i++)
      {
        newArray.push(randomIntFromInterval(5,70));
      }
      setarray(newArray);
      //console.log('new array generated');

  }
  useEffect( () => {
    generateNewArray();
  },[]);  //array to be created on component didmount


  const OnArraySizeChange =(e)=>{
    
  // console.log(e.target.value);
    setnoofbars(e.target.value);
    
    generateNewArray();
  };


  const OnSpeedChange =(e)=>{
    
    console.log(e.target.value);
     setspeed(e.target.value);
   };

   const bubblesort = () => {
    // console.log("hi");
    BubbleSort(array, speed);
  };

  const selectionsort = () => {
    // console.log("hi");
    SelectionSort(array, speed);
  };

  const insertionsort = () => {
    // console.log("hi");
    InsertionSort(array, speed);
  };



   





  return (
    <div className='main-container'>
   <Header/>
    <Button generateNewArray={generateNewArray} bubblesort={bubblesort} selectionsort={selectionsort} insertionsort={insertionsort}/>
    <ArrayBar array={array}/>
    <Ranges noofbars={noofbars} OnArraySizeChange={OnArraySizeChange} OnSpeedChange={OnSpeedChange} speed={speed}/>   
   </div>
  )
}

export default Sorting
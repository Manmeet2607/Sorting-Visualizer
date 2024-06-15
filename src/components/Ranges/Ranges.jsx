import React from 'react';
import './Ranges.css'

export const Ranges = (props) => {
  return (
    <div className='main-cont'>
    <div className="range-slider-container">
        
        <input  type="range" min="2" max={Math.floor(window.screen.width/50)} step="1" defaultValue={props.noofbars} 
        onChange={props.OnArraySizeChange} 
        id="changeSize" />
        <p id="text-animation-speed">Array Size</p>
       
</div>
<div className="range-slider-container">
<input  type="range" min="10" max="1000" defaultValue={props.speed} step="1" 
 onChange={props.OnSpeedChange}
 id="changeSize"/>
        <p id="text-animation-speed">Animation Speed (ms)</p>

       
</div>
</div>
  )
}

export default Ranges

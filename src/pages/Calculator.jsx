import React from 'react';
import './style/Calculator.css';

function Calculator() {
  return (
    <div className='Calculator'>
      <button className='ButtonGray'>AC</button>
      <button className='ButtonGray'>+/-</button>
      <button className='ButtonGray'>%</button>
      <button className='ButtonOrange'>/</button>
      <button className='ButtonGrayDark'>7</button>
      <button className='ButtonGrayDark'>8</button>
      <button className='ButtonGrayDark'>9</button>
      <button className='ButtonOrange'>X</button>
      <button className='ButtonGrayDark'>4</button>
      <button className='ButtonGrayDark'>5</button>
      <button className='ButtonGrayDark'>6</button>
      <button className='ButtonOrange'>-</button>
      <button className='ButtonGrayDark'>1</button>
      <button className='ButtonGrayDark'>2</button>
      <button className='ButtonGrayDark'>3</button>
      <button className='ButtonOrange'>+</button>
      <button className='ButtonGrayDark' id='Zero'>0</button>
      <button className='ButtonGrayDark'>,</button>
      <button className='ButtonOrange'>=</button>
    </div>
  )
}

export default Calculator;

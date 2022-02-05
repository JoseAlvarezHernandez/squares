import React, { useState } from 'react';

import './App.css';
import Square from  './square'

export default function App() {
  const [ squares ] = useState(new Array(400).fill(null));
  const [selected, setSelected] = useState();

  function onClick(index) {
    setSelected(index);
  }

  return (
    <div className="container">
      {
        squares.map(( _square, index) => {
          return <Square onClick={() => onClick(index)} isRed={index === selected} isGreen={index === (selected + 1)} key={index} />;
        })
      }
    </div>
  )
  
}
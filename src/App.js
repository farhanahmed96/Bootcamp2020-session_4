import React, { useState } from 'react';
import { Message } from './message.js'
import './App.css';

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message count={count} />
      <br />
      <button onClick={() => setCount(count + 1)}>
        update counter
      </button>

      <button onClick={() => setMorning(!isMorning)}>
        Update Day
      </button>
    </div>
  );
}


import React, {useState, useEffect, useRef} from 'react'
import useWordGame from './useWordGame'
import './App.css';

function App() {
  const {text,
    handleChange,
    isTimeRunning,
    textRef,
    timeRemaining,
    wordCount,
    startClock,
  } = useWordGame()


  return (
    <>
    <h1>How fast can you type?</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
    Soluta, quos. Nam accusantium aperiam aut voluptate tempore quasi, quas
    tenetur molestias quibusdam aspernatur repudiandae ipsum voluptatum.
    Dolore, assumenda! Expedita, asperiores non tempora, voluptatem sunt,
    velit fuga eos vel excepturi dicta quia architecto.
    Consectetur ex mollitia quasi dicta repudiandae delectus? Quos, minus.
    </p>
    <textarea onChange={handleChange}
    value={text}
    name=""
    id=""
    cols="30"
    rows="10"
    disabled={!isTimeRunning}
    ref={textRef}
    >
    </textarea>
    <h3>Time remaining:{timeRemaining}</h3>
    <h1>Word Count:{wordCount}</h1>
    <h2>Words per minute: {wordCount * 3}</h2>
    <button onClick={startClock}
    disabled={isTimeRunning} >Start</button>
    </>

  );
}

export default App;

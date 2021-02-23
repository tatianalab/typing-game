import {useState, useEffect, useRef} from 'react'

function useWordGame(){
  const STARTING_TIME = 20
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textRef = useRef(null)

  const handleChange = (e) => {
    e.preventDefault()
    const {value} = e.target
    setText(value)
  }

  const calculateWordCount = (text) => {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter(word => word!== "").length
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
      setTimeRemaining(prevTimeRemaining => timeRemaining - 1)
    }, 1000)
    } else if(timeRemaining === 0){
      endGame()
    }

  }, [timeRemaining, isTimeRunning])


  const startClock = () => {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    textRef.current.disabled = false
    textRef.current.focus()
  }

  const endGame = () => {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  return {text, handleChange, isTimeRunning, textRef, timeRemaining, wordCount, startClock, isTimeRunning }
}

export default useWordGame

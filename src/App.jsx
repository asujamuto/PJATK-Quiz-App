import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './Question'
import Questions from './Questions.json'       
import { useEffect } from 'react'
import dataScience from './assets/data-science.png'

function App() {
  // const [random, setRandom] = useState(parseInt(Math.random()*Questions.Questions.length))
  const [random, setRandom] = useState(14)
  const [question, setQuestion] = useState(Questions.Questions[random]);

  useEffect(()=>{
    setQuestion(Questions.Questions[random])
  })
  
  return (
    <>
      <img src={dataScience} className="logo react" alt="Vite logo" />
      <Question category={question.Kategoria} question={question.Pytanie} answer={question.Odpowiedź} presentation={question.Prezentacja}/>
      <button onClick={()=>setRandom(parseInt(Math.random()*Questions.Questions.length))}>Następne pytanie</button> 
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Question({category, question, answer, presentation}) 
{
  const [count, setCount] = useState(false)

  return (
    <>
      <h3>Kategoria: {category} </h3>
      <h2>{question}</h2>
      <div className="card">
        <button onClick={() => (count ? setCount(false) : setCount(true))}>
            Pokaż odpowiedź  
        </button>
        {
          count ? 
          <div>
            {answer} 
          </div>
           : 
          <div> 
            
          </div>
          
        }
        </div>
      <p className="read-the-docs">
        Pytanie z prezentacji numer: {presentation}  
      </p>
    </>
  )
}

export default Question 

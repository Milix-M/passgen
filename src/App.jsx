import { useState } from 'react'
import './App.css'
import passwordGenerator from './generator/passwdGen'

function App () {
  const [password, setPassword] = useState('')
  const [length, setLength]  = useState(0)


  return (
    <div className='App'>
      <h1>Passgen</h1>
      <input type="number" min="4" onChange={(event)=>setLength(event.target.value)}/>
      <button onClick={() => setPassword(passwordGenerator(length, "charonly"))}>
        英数字のみで生成
      </button>
      <button onClick={() => setPassword(passwordGenerator(length, "symbolsInclude"))}>
        英数字+記号で生成
      </button>
      <p>{password}</p>
    </div>
  )
}

export default App

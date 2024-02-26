import { useState } from 'react'
import './App.css'
import passwordGenerator from './generator/passwdGen'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function App () {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(0)

  const copyToClipboard = async () => {
    await global.navigator.clipboard.writeText(password)
  }

  return (
    <div className='App p-2 max-w-md w-full mx-auto'>
      <h1 className='text-3xl texe-center font-bold pb-4'>Passgen</h1>

      <div className='flex flex-col'>
        <div className='m-1'>
          <TextField
            id='standard-basic'
            label='桁数を入力'
            variant='filled'
            type='number'
            onChange={event => setLength(event.target.value)}
          />
        </div>
        <div className='m-1'>
          <Button
            variant='contained'
            onClick={() => setPassword(passwordGenerator(length, 'charonly'))}
          >
            英数字のみで生成
          </Button>
        </div>
        <div className='m-1'>
          <Button
            variant='contained'
            onClick={() =>
              setPassword(passwordGenerator(length, 'symbolsInclude'))
            }
          >
            英数字+記号で生成
          </Button>
        </div>
      </div>

      {password && (
        <div>
          <p className='text-xl'>{password}</p>
          <Button variant='contained' onClick={() => copyToClipboard()}>
            COPY
          </Button>
        </div>
      )}
    </div>
  )
}

export default App

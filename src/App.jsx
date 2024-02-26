import { useState } from 'react'
import './App.css'
import passwordGenerator from './generator/passwdGen'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

function App () {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(0)
  const [isinputenable, setIsInputEnable] = useState(false)

  const copyToClipboard = async () => {
    await global.navigator.clipboard.writeText(password)
  }

  return (
    <div className='App p-2 max-w-md w-full mx-auto'>
      <h1 className='text-3xl texe-center font-bold pb-4'>Passgen</h1>

      <div className='flex flex-col'>
        <div className='m-1'>
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='radio-buttons-group'
            >
              <FormControlLabel
                value='8'
                control={<Radio />}
                label='8桁'
                onChange={event => setLength(event.target.value)}
              />
              <FormControlLabel
                value='12'
                control={<Radio />}
                label='12桁'
                onChange={event => setLength(event.target.value)}
              />
              <FormControlLabel
                value='40'
                control={<Radio />}
                label='40桁'
                onChange={event => setLength(event.target.value)}
              />
              <FormControlLabel
                value='true'
                control={<Radio />}
                label='桁数を入力'
                onChange={event => setIsInputEnable(event.target.value)}
              />
            </RadioGroup>
          </FormControl>
        </div>

        {isinputenable && (
          <div className='m-1'>
            <TextField
              id='standard-basic'
              label='桁数を入力'
              variant='filled'
              type='number'
              onChange={event => setLength(event.target.value)}
            />
          </div>
        )}

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
          <span className='text-center text-xl'>生成されたパスワード:</span>
          <p className='text-xl p-2 text-center break-all'>{password}</p>
          <Button variant='contained' onClick={() => copyToClipboard()}>
            COPY PASSOWORD
          </Button>
        </div>
      )}
    </div>
  )
}

export default App

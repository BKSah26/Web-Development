import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '../components/Card.jsx'

function App() {
  // Create State
  // Manage State
  // Change State

  const [name, setName] = useState('');

  return (
    <>
    <Card title = "Card1" name={name} nameSet = {setName}/>
    <p>Inside Parent Component:</p>
    <p>Name: {name}</p>
    
    <Card title = "Card2" name={name} nameSet = {setName}/>
    </>
  )
}

export default App

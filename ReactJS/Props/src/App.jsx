import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '../components/Card'
import RanjitSingh from './assets/RanjitSingh.jpg'
import Button from '../components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
    <div>
      <Card name="Ranjit Singh">
        <img src={RanjitSingh} alt="Ranjit Singh" id='image'/>
        <p>Ranjit Singh (13 November 1780 - 27 June 1839), born as Buddh Singh, was the founder and first maharaja of the Sikh Empire, ruling from 1801 until his death in 1839. Born to Maha Singh, the leader of the Sukerchakia Misl, Singh survived smallpox in infancy but lost sight in his left eye. At the age of ten years old, he fought his first battle alongside his father. After his father died around Ranjit Singh's early teenage years, he became leader of the Misl.</p>
      </Card>
      <Button click={handleClick}>
        <h1>
          ZINDABAD X {count}
        </h1>
      </Button>
    </div>
    </>
  )
}

export default App

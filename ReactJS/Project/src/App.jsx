import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserCard from '../components/UserCard'
import ChandraguptaMaurya from "./assets/ChandraguptaMaurya.jpg"
import MaharanaPratap from "./assets/MaharanaPratap.jpg"
import RanjitSingh from "./assets/RanjitSingh.jpg"
import ShivajiBhonsale from "./assets/ShivajiBhonsale.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <UserCard name = "Chandragupta Maurya" desc="Chandragupta Maurya (reigned 320 BCE - 298 BCE)[f] was the founder and the first emperor of the Maurya Empire, based in Magadha (present-day Bihar) in the Indian subcontinent." img = {ChandraguptaMaurya}/>
      <UserCard name = "Ranjit Singh" desc = "Ranjit Singh, born as Buddh Singh, was the founder and first maharaja of the Sikh Empire, ruling from 1801 until his death in 1839." img = {RanjitSingh}/>
      <UserCard name = "Maharana Pratap" desc = "Pratap Singh I (18 May 1540 - 19 January 1597), popularly known as Maharana Pratap, was king of the Kingdom of Mewar, in north-western India in the present-day state of Rajasthan, from 1572 until his death in 1597. He is notable for leading the Rajput resistance against the expansionist policy of the Mughal Emperor Akbar including the battle of Haldighati." img = {MaharanaPratap}/>
      <UserCard name = "Shivaji Bhonsle" desc = "Shivaji I (Shivaji Shahaji Bhonsale) was an Indian ruler and a member of the Bhonsle dynasty. Shivaji inherited a jagir from his father who served as a retainer for the Sultanate of Bijapur, which later formed the genesis of the Maratha Kingdom. In 1674, he was formally crowned the Chhatrapati of his realm at Raigad Fort." img = {ShivajiBhonsale}/>
    </div>
    </>
  )
}

export default App

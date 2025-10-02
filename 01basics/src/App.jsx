import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Compo from "./compo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Compo />
      <p>Jsx return only one element return and many subelement return hence make div a single element</p>
    </div>    
  )
}

export default App

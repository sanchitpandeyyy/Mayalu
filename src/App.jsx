import { useState } from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      
      <Header/>
      <Navbar />

    </>
  )
}

export default App

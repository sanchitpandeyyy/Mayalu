import { useState } from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      
      <Header/>
      <Navbar />
      <Home/>
      <Footer />
      

    </>
  )
}

export default App

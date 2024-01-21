import { useState } from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Packages from './pages/Packages'


function App() {


  return (
     <>
      
      <Header/>
      <Navbar />
      <Home/>
      <About/>
      <Packages/>
      <Footer />
      

    </>
  )
}

export default App

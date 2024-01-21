import { useState } from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'


function App() {


  return (
     <>
      
      <Header/>
      <Navbar />
      <Home/>
      <About/>
      <Packages/>
      <Gallery/>
      <Contact/>
      <Footer />
      

    </>
  )
}

export default App

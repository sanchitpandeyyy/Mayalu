import { useState, useEffect } from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Loader from './components/Loader/Loader'
import Gallery from './pages/Gallery'
import Aos from "aos";



function App() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    Aos.init({ easing: "ease", duration: 700 });
  });
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  });

  return (
    <div>
       {loader ? (
        <Loader />
      ) : (
        <div>
      <Header/>
      <Navbar />
      <Home/>
      <About/>
      <Packages/>
      <Gallery/>
      <Contact/>
      <Footer />
      </div>
      )}
      </div>
    );
  };

export default App

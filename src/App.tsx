import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './pages/Error'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<Projects/>} />
          <Route path="*" element={<Error/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

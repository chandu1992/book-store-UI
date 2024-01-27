import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import { About } from '../components/pages/about/About'

export const Router = () => {
  return (
    <div>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>  
      </Routes>
    </BrowserRouter>
    </div>
  )
}

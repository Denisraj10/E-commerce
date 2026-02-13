import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Login/>}/>

    <Route path='/Login' element={<Login/>}/>
    <Route path='home' element={<Home/>}/>

    </Routes>
</Router>
  )
}

export default App

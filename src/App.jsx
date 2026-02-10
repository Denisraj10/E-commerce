import { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Login/>}/>

    <Route path='/Login' element={<Login/>}/>

    </Routes>
</Router>
  )
}

export default App

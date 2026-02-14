import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import AddItem from './pages/additem'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  const [items, setItems] = useState([]);

  return (
<Router>
  <Routes>
    <Route path='/' element={<Login/>}/>

    <Route path='/Login' element={<Login/>}/>
    <Route path="/home" element={<Home items={items} />} />
<Route path="/additem" element={<AddItem setItems={setItems} />} />
//element should capital
        <Route path="*" element={<Home items={items} />} />


    </Routes>
</Router>
  )
}

export default App

import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  const [items, setItems] = useState([]);

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/additem" element={<AddItem />} />

      </Routes>
    </Router>
  );
}

export default App;
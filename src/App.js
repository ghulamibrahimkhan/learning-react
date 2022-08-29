import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';

import React, { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#505050"
      showAlert("Dark Mode is On", "warning")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "#FFFFFF"
      showAlert("Light Mode is On", "primary")
      document.title = "TextUtils - Light Mode"
    }
  }
  setInterval(() => {
    document.title = "Install TextUtils Now"
  }, 4000);
  setInterval(() => {
    document.title = "TextUtils Is Amazing App"
  }, 2300);

  return (
    <BrowserRouter>
        <>
          <Navbar title="Text Utils" home="Home" about="About us" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
      <Routes>
          <Route path="/" element={<TextForm heading={"Enter the text to analyze"} label="Enter your text below" mode={mode} showAlert={showAlert} />} />
          <Route path="about" element={<About />} />
      </Routes>
        </>
    </BrowserRouter>
  );
}

export default App;

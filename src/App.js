import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light")
  // const [color, setColor] = useState("dark")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#505050"
    }
    else {
      setMode("light")
      // document.body.style.backgroundColor = "#FFFFFF"
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="Text Utils" about="About us" contact="Contact" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze" label="Enter your text below" mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default App;

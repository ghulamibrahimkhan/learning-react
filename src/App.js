import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
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
      showAlert("Dark Mode is On","warning")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "#FFFFFF"
      showAlert("Light Mode is On","primary")
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="Text Utils" about="About us" contact="Contact" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}   />
      <TextForm heading="Enter the text to analyze" label="Enter your text below" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;

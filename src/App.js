
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0f0d28';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-Dark Mode'
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);

      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
    }
    else {

      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode'



    }
  }
  return (
    <>
      


      <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    </Routes>
  </div>
</Router>





    </>
  );
}

export default App;

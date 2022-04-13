import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [ alert, setalert ] = useState(null);
  const showalert = (message, type) => {
    setalert(
      
       { msg: message,
        type: type},

        setTimeout(() => {
          setalert(null);
        }, 1500)  
      
    )


  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#111d38';
      showalert("Dark mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enable", "success");
    }
  }
  return (
    <>

<Router>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container mb-3">
      
      <Routes>
          <Route path="/about" element={ <About />}>
           
          </Route>
         
          <Route path="/" element={<TextForm heading="Enter the text to anlyze below" mode={Mode} showalert={showalert} />}>
          

          </Route>
        </Routes>
       
      </div>
      </Router>
    </>

  );
}

export default App;

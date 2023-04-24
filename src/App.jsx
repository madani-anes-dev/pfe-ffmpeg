import React, { useState, useEffect } from 'react';
import './App.css';
import { createFFmpeg , fetchFile } from '@ffmpeg/ffmpeg';
import Loading from './components/Loading';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Contact from './components/Contact'



const ffmpeg = createFFmpeg({
  log: true,
});


function App() {
      const [switche, setSwicthe] = useState(false);
      const [ready,setReady] = useState (false); 
      const load = async ()=>{
        await ffmpeg.load();
        setReady(true);
        setSwicthe(!switche);
      }
      
      useEffect (()=>{
        load();
      },[]);
    

  return (
    <div className="App">
      {switche ? (
      <>
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/Signin" element={<Signin/>}/>
              <Route path="/Signup" element={<Signup/>}/>
              <Route path="/Contact" element={<Contact/>}/>


            </Routes>
        </Router>
      </>
      ) : (
        <Loading/>
      )}
    </div>
  );
}

export default App;



      
    
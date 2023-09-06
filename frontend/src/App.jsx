import React from "react";
import Goal from "./Goal";
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
import Tryit from "./Tryit";
import "./index.css"
import {Route,Routes} from 'react-router-dom';
import Overview from './Overview';
import Viewrecord from './Viewrecord';
import Addrecord from './Addrecord';
import Preprocess from './Preprocess';
import Image from './Image';
import Video from './Video';
import Webcam from './Webcam';

const App = () => {
 

  return (
    <>
    {/* <Home/> */}
    {/* <Goal/> */}
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Tryit/> */}

    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/goal' element={<Goal/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Tryit' element={<Tryit/>}>
            <Route path='overview' element={<Overview/>}/>
            <Route path='viewrecord' element={<Viewrecord/>}/>
            <Route path='addrecord' element={<Addrecord/>}/>
            <Route path='preprocess' element={<Preprocess/>}/>
            <Route path='image' element={<Image/>}/>
            <Route path='video' element={<Video/>}/>
            <Route path='webcam' element={<Webcam/>}/>
        </Route>
      </Routes>

    </>
  );
};

export default App;   



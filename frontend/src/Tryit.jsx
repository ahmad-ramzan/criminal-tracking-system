import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import {NavLink} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

const Tryit = () => {
  return (
    <div className='main'>
    <Navbar/>

    <div className="container-fluid py-5 mb-0" style={{ backgroundColor: "#FE6F5E" }}>
        <h1 className='is-size-3 has-text-weight-bold has-text-centered'>IDENTIFICATION SOURCES</h1>
    </div>
<div className='container-fluid is-flex is-flex-direction-row' id="maincontainer">
  <div className='side1nav is-flex is-flex-direction-column'>
    <NavLink exact="true" to='/tryit/overview' ><li className='p-3 px-6 '>OverView</li></NavLink>
    <NavLink to='/tryit/viewrecord' ><li className='p-3 px-6 '>ViewRecord</li></NavLink>
    <NavLink to='/tryit/addrecord' ><li className='p-3 px-6'>AddRecord</li></NavLink>
    <NavLink to='/tryit/preprocess' ><li className='p-3 px-6'>PreProcess</li></NavLink>
    <NavLink to='/tryit/image' ><li className='p-3 px-6'>Image</li></NavLink>
    <NavLink to='/tryit/video' ><li className='p-3 px-6'>Video</li></NavLink>
    <NavLink to='/tryit/webcam' ><li className='p-3 px-6'>WebCam</li></NavLink>
  </div>
  <div className='side2'>
  <Outlet/>
  </div>
</div>
    <Footer/>
      
    </div>
  )
}

export default Tryit

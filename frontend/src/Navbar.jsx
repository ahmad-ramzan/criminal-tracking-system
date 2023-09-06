import React from 'react'
import Dropdown from "./Dropdown"
import { GiInvisibleFace} from "react-icons/gi";
import { AiFillHome,AiFillTrophy,AiFillUpCircle } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar has-background-info-dark" id="navbar">
  <div class="container mx-0 is-fluid" id="container" >
      <div class="navbar-start is-flex-touch is-justify-content-center" id="navbar-start">
        <div class="navbar-brand ">
          <Link class="navbar-item has-text-danger-dark has-text-weight-bold is-size-3" to="/">
          <span className="has-text-white is-size-2"><GiInvisibleFace/></span>SAFEX.
          </Link>
        </div>
      </div>
    <div class="navbar-end is-flex-touch is-justify-content-center">
    
        <div class="navbar-item is-flex-mobile" id="items">
            <Link class="has-text-white px-6 py-3" to="/"><AiFillHome/> Home</Link>
            <Link class="has-text-white px-6 py-3" to="/goal"><AiFillTrophy/> Goals</Link>
            <Link class="has-text-white px-6 py-3" to="/about"><AiFillUpCircle/> About</Link>
            <Link class="has-text-white px-6 py-3" to="/contact"><BsTelephoneFill/> Contact</Link>
            <Link class="has-text-white px-6 py-3" to="/tryit"><FaLock/> TRYIT</Link>
        </div>
      
      <Dropdown/>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

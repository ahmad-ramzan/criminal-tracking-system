import React,{ useState } from 'react'
import { GiInvisibleFace,GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome,AiFillTrophy,AiFillUpCircle } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Dropdown = () => {
    const [state,setState] = useState(false);
  const action = () => {
    return setState(!state);
  }
  return (
    <>
      <div class={`dropdown ${state ? 'is-active' : ''} down`} onClick={()=>{action()}}>
         <div class="dropdown-trigger down" >
            <button class="button is-fullwidth is-flex is-justify-content-space-between " aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Menu</span>
            <span class="has-text-right"><GiHamburgerMenu/></span>
            </button>
        </div>
        <div class="dropdown-menu down" id="dropdown-menu" role="menu">
        <div class="dropdown-content down">
          <Link to="/" class="dropdown-item">
          <AiFillHome/> Home
          </Link>
          <Link to="/goal" class="dropdown-item">
          <AiFillTrophy/> Goals
          </Link>
          <Link to="/about" class="dropdown-item">
          <AiFillUpCircle/> About
          </Link>
          <Link to="/contact" class="dropdown-item">
          <BsTelephoneFill/> Contact
          </Link>
          <hr class="dropdown-divider"></hr>
          <Link to="/tryit" class="dropdown-item">
          <FaLock/> TRYIT
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dropdown

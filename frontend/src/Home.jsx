import React from 'react'
import Card from "./Card";
import Footer from "./Footer";
import Sliding from "./Sliding";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className='main'>
    <Navbar/>

    <Sliding/>

    <div className="container-fluid is-flex is-justify-content-space-around mx-2 py-6 my-6" id="cardcontainer">
    <div>
    <Card name="Abdullah" image="./images/Abdullah1.jpg"/>
    </div>
    <div>
    <Card name="Ibtasam" image="./images/Ibtasam1.jpg"/>
    </div>
    <div>
    <Card name="Abdullah" image="./images/Abdullah2.jpg"/>
    </div>
    </div>
    

    <Footer/>
    </div>
  )
}

export default Home

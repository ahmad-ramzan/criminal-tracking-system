import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className='main'>
      <Navbar/>

<section id="about">
    <div class="container-fluid pb-6 has-background-info-light">
    <div className="container-fluid py-5 mb-5" style={{ backgroundColor: "#FE6F5E" }}>
        <h1 className='is-size-3 has-text-weight-bold has-text-centered'>ABOUT US</h1>
    </div>

    <div className="container is-size-5 has-background-info-light">
      <p>Welcome to our website! We are a dedicated group of three individuals who have been working together since our first semester. Over the years, we have built a strong bond and have maintained our group, even during class timetable selections in each semester.</p>

      <h2 className='is-size-4 has-text-weight-bold'>Our Expertise</h2>
      <p>Each member of our team brings unique skills and expertise to the table:</p>

      <div class="team-members">
        <div class="team-member">
          <img  src="./images/Abdullah.jpg" alt="Abdullah"/>
          <h3 className='is-size-4 has-text-weight-bold'>Abdullah</h3>
          <p>Web Developer</p>
        </div>
        <div class="team-member">
          <img src="./images/Ibtasam.jpg" alt="Ibtasam"/>
          <h3 className='is-size-4 has-text-weight-bold'>Ibtasam</h3>
          <p>Binance Expert</p>
        </div>
        <div class="team-member">
          <img src="./images/Ahmad.jpg" alt="Ahmad"/>
          <h3 className='is-size-4 has-text-weight-bold'>Ahmad</h3>
          <p>Model Trainer Expert</p>
        </div>
      </div>

      <h2 className='is-size-4 has-text-weight-bold'>Our Project: Safex</h2>
      <p>We have undertaken an ambitious project called Safex, a criminal identification system. Combining our knowledge and expertise, we have dedicated extensive time and effort to develop a solution that addresses the critical challenges in criminal identification.</p>
      <p>Our goal with Safex is to create an advanced system that leverages machine learning algorithms and data analysis techniques to assist law enforcement agencies in accurately identifying and tracking criminals. By using cutting-edge technologies and our in-depth understanding of the market, we aim to deliver a project that holds significant value.</p>

      <h2 className='is-size-4 has-text-weight-bold'>Our Commitment</h2>
      <p>We are committed to excellence and strive to provide innovative solutions that make a difference. With Safex, we aim to contribute to the field of criminal identification and enhance public safety. Our dedication, teamwork, and passion for our work drive us to go beyond expectations and deliver impactful results.</p>
     </div>
    </div>
  </section>

      <Footer/>
    </div>
  )
}

export default About

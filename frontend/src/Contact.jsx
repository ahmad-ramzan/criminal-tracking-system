import React,{useState} from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  const [mail1,setMail1] = useState({
    fname: "",
    email: "",
    message: ""
  });
  const [mail2,setMail2] = useState({
    fname: "",
    email: "",
    message: ""
  }); 
  function update1(event){
    const {name,value} = event.target;
     setMail2((pre)=>{
      return ({
        ...pre,
        [name]:value
      });
    });
  }
  function update2(){
    setMail1({
      fname: mail2.fname,
      email: mail2.email,
      message: mail2.message
    });
    console.log(mail2)
  }


  return (
    <div className='main'>
      <Navbar/>
      <div className="container-fluid py-5 mb-5" style={{ backgroundColor: "#FE6F5E" }}>
        <h1 className='is-size-3 has-text-weight-bold has-text-centered'>CONTACT US</h1>
    </div>
  <form action="https://formspree.io/f/mleyelge" method="post">
<div className="container px-6 mx-6 py-6">
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" name="fname" onChange={(e)=>{update1(e)}} placeholder="Name input"/>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" name="email" onChange={(e)=>{update1(e)}} placeholder="Email input"/>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" name="message" onChange={(e)=>{update1(e)}} placeholder="Place your issue here"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" onClick={update2}>Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
        </div>
        </form>
      <Footer/>
    </div>
  )
}

export default Contact

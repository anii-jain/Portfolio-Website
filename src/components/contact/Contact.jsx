import "./contact.scss";
import { useRef, useEffect } from "react"; 
import emailjs from '@emailjs/browser';
import {Place, Phone, Email} from "@material-ui/icons";

export default function contact() {
  const form = {useRef};
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    document.getElementById("myModal").style.display = "none";
  }
  const SendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_n9wf0ob', 'template_5c5q4yz', form.current, 'BXre-Btws8xI75jSN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      document.getElementById("myModal").style.display = "block";
  };
  return (
    <div className="contact" id="contact">   
      <div id="myModal" className="modal">
        <div className="modal-content">
          <h3 className="textsuccess">MESSAGE SENT SUCCESSFULLY!</h3>
        </div>
      </div>
      <div className="wrap" id="wrap">
        <div className="left" id="left">
          <h2>SEND ME A <br/> MESSAGE .</h2>
          <form onSubmit={SendEmail} ref={form}>
            <input autoComplete="off" name="user_name" type="text" placeholder="Name*" required/>
            <input autoComplete="off" name="user_email" type="email" placeholder="Email address*" required/>
            <textarea autoComplete="off" name="message" placeholder="Message" />


            <section className="container">
  <button data-hover="click me!"><div>Hover me!</div></button></section>


            {/* <button type="submit">Send Message</button> */}
          </form>
        </div>
        <div className="right">
          <h2>DROP IN OUR COLLEGE .</h2>
          <p>I am currently studying at LNM Institute of Information technology completing my Bachlors of Technology.</p>
          <div className="container">
            <Place className="icon"/>
            <h4>Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur, Rajasthan 302031</h4>
          </div>
          <div className="container">
            <Email className="icon" />
            <h4>ajanimesh20026@gmail.com</h4>
          </div>
          <div className="container">
            <Phone className="icon"/>
            <h4>(+91) 975 3456 141</h4>
          </div>
        </div>
      </div>
      <div className="motion">
         <a href="#nar" className="changeu">
           <img src="assets/down.png" alt="" />
         </a>
         <a href="#intro" className="changed">
           <img src="assets/down.png" alt="" />
         </a>
       </div>
    </div>
  )
}

import "./contact.scss";
import {Place, Phone, Email} from "@material-ui/icons";

export default function contact() {
  return (
    <div className="contact" id="contact">
      <div className="wrap">
        <div className="left">
          <h2>SEND ME A <br/> MESSAGE .{/*🚀*/}</h2>
          <form>
            <input type="text" placeholder="Name*" required/>
            <input type="text" placeholder="Email address*" required/>
            <textarea placeholder="Message" />


            <section class="container">
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
    </div>
  )
}

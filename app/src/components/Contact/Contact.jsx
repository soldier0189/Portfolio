import React from 'react'
import email from "../../assets/email.png"
import linkedin from "../../assets/linkedin.png"
import "./Contect.css"
const Contact = () => {
  return (
    <div className='contact container'>
        Get in Touch
        <h2>Contact Me</h2>

        <div className="contact-box">
            <div className="sub-contact">
                <img src={email} alt="email-img" />
                <p>rathore.sonakshi321@gmail.com</p>
            </div>
            <div className="sub-contact">
                <img src={linkedin} alt="linkedin-img" />
                <p>LinkedIn</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
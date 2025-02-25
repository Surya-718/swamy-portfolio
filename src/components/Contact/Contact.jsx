import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "40de47e5-3d37-49ca-81f7-86af6ef571f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your message sent successfuly");
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Get in touch</h1>
          <p>Whether you want to get in touch, 
            talk about a project collaboration, or just say hi, I'd love to hear from you.
          Simply fill the from and send me an email.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="main" />
              <p>swamy18718@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+918309518718</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Ajjaram,AP</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" action="">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button className='contact-submit' type='submit'>Submit Now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact

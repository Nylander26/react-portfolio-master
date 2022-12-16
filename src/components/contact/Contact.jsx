import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvqgmej', 'template_smzywvs', form.current, 'D7GgfWMfct7bW26J4')
      
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Wolfnylander@gmail.com</h5>
            <a href="mailto:wolfnylander@gmail.com" target="_blank">Send a Message</a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Wolfgang Nylander</h5>
            <a href="https://m.me/wolfgang.nylander" target="_blank">Send a Message</a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+34678709348</h5>
            <a href="https://wa.me/+34678709348" target="_blank">Send a Message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className='center__btn__contact'>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
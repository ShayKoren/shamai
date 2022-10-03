import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
/* import {RiMessengerLine} from 'react-icons/ri' */
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id ="contact" >
      
      <h2 className="contactMe" >צרו איתי קשר </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>shoshani2@gmail.com</h5>
            <a href="mailto:shoshani2@gmail.com" target='_blank'>שלחו הודעה</a>
          </article>
          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/profile.php?id=100074256692656" target='_blank'>Send a message</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>whatsapp</h4>
            <h5>+972-054-330-8340</h5>
           {/*  <a href="https://api.whatsapp.com/send?phone+972506681311" target='_blank'>Send a message</a> */}
            <a href="https://wa.me/9720543308340" target='_blank'>שלחו הודעה</a>{/* not original */}
            
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name="name"placeholder="'שם מלא" required/>
          <input type="email" name="email" placeholder="אימייל" required/>
          <textarea name="message" rows="7" placeholder="כתוב הודעה" required></textarea>
          <button type="submit" className="btn btn-primary">שלח</button>
        </form>
      </div>
    </section >
  )
}
export default Contact

import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3ndg7w', 'template_1vuh0hl', form.current, {
            publicKey: '2_jCgZ8qtMxUdH3HY',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Lets talk about everything!</h3>
                    <p className="contact__details">Don't like forms? Send me an email.</p>
                    <br></br>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=alexandra.anchondo.17@gmail.com&su=Your%20Subject&body=Your%20Message" target="_blank" rel="noopener noreferrer" className="btn">
                        <span>Send me an email </span>
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insert your name' name='from_name'/>
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder='Insert your email' name='to_name'/>
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder='Insert your subject' name='reply_to'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea name="message" id="" cols="30" rows="10" className="contact__form-input" placeholder='Write your message'></textarea>
                    </div>

                    <button type='submit' className='btn'>
                        <span>Send message </span>
                        <i class="fa-solid fa-message"></i>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
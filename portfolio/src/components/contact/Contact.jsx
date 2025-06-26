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
        <div className="main__container">
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
                                <input type="text" className="contact__form-input" placeholder='Insert your name' name='from_name' />
                            </div>

                            <div className="contact__form-div">
                                <input type="email" className="contact__form-input" placeholder='Insert your email' name='to_name' />
                            </div>
                        </div>

                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insert your subject' name='reply_to' />
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
            <a href='#home'>
                <button className="button">
                    
                        <svg class="svgIcon" viewBox="0 0 384 512">
                            <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                            ></path>
                        </svg>
                </button>
            </a>
        </div>
    );
}

export default Contact;
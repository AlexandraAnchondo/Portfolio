import React from 'react';
import "./about.css";
import Me from '../../assets/logo_resized.png';
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <img src={Me} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                    I'm experienced in JavaScript, Python, Java, C, and C#, and I'm well-versed in MySQL database management. I also have hands-on experience with frameworks like React and Vue, and I'm proficient in using Node.js for server-side development. 
                    </p>
                    <a href="" className='btn'>Download CV</a>
                </div>

                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills_titles">
                            <h3 className="skills__name">Development</h3>
                            <span className="skills__number">90%</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage development"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills_titles">
                            <h3 className="skills__name">UI/UX Design</h3>
                            <span className="skills__number">80%</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage ui__design"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills_titles">
                            <h3 className="skills__name">Database Management</h3>
                            <span className="skills__number">60%</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage database"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AboutBox />
        </section>
    );
}

export default About;
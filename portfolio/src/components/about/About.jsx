import React from 'react';
import "./about.css";
import Me from '../../assets/logo_resized.png';
import AboutBox from './AboutBox';
import CV from '../../assets/alexandra-a-resume.pdf';

const About = () => {
    return (
        <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <img src={Me} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                    I'm experienced in JavaScript, Python, Java, and I'm well-versed in MySQL database management. I also have hands-on experience with frameworks like React and Vue, and I'm proficient in using Node.js for server-side development. 
                    </p>

                    <a href={CV} download="alexandra-a-resume.pdf" className="download-button">
                        <div class="docs">
                            <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line y2="13" x2="8" y1="13" x1="16"></line>
                                <line y2="17" x2="8" y1="17" x1="16"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg> Download CV</div>
                        <div class="download">
                            <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line y2="3" x2="12" y1="15" x1="12"></line>
                            </svg>
                        </div>
                    </a>

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
import React from 'react';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                
                <div>
                    <h3 className="about__title">8</h3>
                    <span className="about__subtitle">Projects completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-book-open"></i>
                
                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Courses/certifications taken</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-hourglass"></i>
                
                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Years of experience</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;
import React from 'react';
import "./home.css";
import Me from "../../assets/alex.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className='home container' id='home'>  
            <div className='intro'>
                <img src={Me} alt='' className='home__img' />
                <h1 className="home__name">Alexandra Anchondo</h1>
                <span className='home__education'>Hello! I'm a software developer.</span>

                <HeaderSocials />

                <a href="#contact" className="code__btn">
                    <span>Contact Me</span>
                </a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    );
}

export default Home;
import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Darkmode from './components/darkmode/Darkmode';

const App = () => {
  return (
    <>
    <Darkmode />
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
    </>
  );
}

export default App;

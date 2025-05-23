import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed Projects</small>
              <div><small>30+ Completed POCs</small></div>
              

            </article>
          </div>
          <p>I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript,React,React Native building UI and Functionalitiy Works.A Frontend Developer specializing in React and React Native is responsible for designing, developing, and optimizing user interfaces (UI) for web and mobile applications. Their role primarily involves writing clean, maintainable code using React.js for web applications and React Native for mobile applications.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
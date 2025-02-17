import React from 'react';
import './Hero.css';
import profile_pic from '../../assets/profile_pic.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_pic}></img>
      <h1><span>I'm Swamy Pothabattula,</span>Aspiring Data Scientist & Developer</h1>
      <p>A passionate final-year B.Tech CSE (AI & ML) student at VIT Amaravati, eager to apply problem-solving skills in data science, machine learning, and full-stack development.
      </p>
    <div className="hero-resume" ><a 
        href="https://drive.google.com/file/d/1ASaRH6oz5kz2Xa-BR5LpGWdkcJ7V9MRo/view?usp=sharing"  
        target="_blank" 
        className="hero-resume"
      >
        My Resume
      </a></div>
    </div>
  )
}

export default Hero

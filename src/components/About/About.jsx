import React from 'react';
import './About.css';
import proflie_img from '../../assets/profile_pic.png';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={proflie_img} alt="" />
        </div>
        <div className="about-right">
            <p>Hello, my name is Pothabattula Swamy. Currently, I’m in my final year of a B.Tech in CSE with specializion in AI & ML at Vellore Institute of Technology, Amaravati. I am very interested in problem-solving, particularly using Java and as well as working with SQL.
                In my academic journey I have gained skills in ML,DL which I have applied these skills in my projects like Weather Classification using DL and Leaf Disease Detection using CNN.
                In addition, I’ve completed certification in Data Structures and Algorithms from Board Infinity and I also completed certification in AI and MLfrom Smart Internz. I have solved over 250+ problems on LeetCode.
                I am seeking an opportunity to work in a company where I can apply my problem-solving skills to develop impactful projects</p>
        </div>
      </div>
      <div className='about-achieve'>
        <div className='achieve'>
            <h1>350+</h1>
            <p>LEETCODE PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className='achieve'>
            <h1>50+</h1>
            <p>SQL HACKERRANK PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className='achieve'>
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About

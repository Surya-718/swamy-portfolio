import React from 'react';
import './Skills.css';
import skills from '../../assets/skills_data';
const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card">
                        <img src={skill.image} alt={skill.name} className="skill-logo" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Skills;

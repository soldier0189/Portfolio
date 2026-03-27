import React from 'react'
import SkillCard from './SkillCard'
import "./Skill.css"
const Skills = () => {
  return (
    <div className='skills container'>
        <h2>Skills</h2>
        <div className="skill-box">
            <SkillCard title="Languages" subject={[{"Python": "Experienced"}, {"C++": "Intermediate"}, {"SQL": "Experienced"}, {"HTML": "Experienced"}, {"CSS": "Experienced"}, {"Reactjs": "Intermediate"}]} />
            <SkillCard title="ML Frameworks" subject={[{"Scilit-Learn": "Experienced"}, {"Tensorflow": "Intermediate"}, {"Keras": "Intermidiate"}]} />
            <SkillCard title="Tools" subject={[{"Git / GitHub": "Experienced"}, {"VS code": "Experienced"}, {"Jupyter":"Experienced"}]} />
            <SkillCard title="Backend" subject={[{"FastAPI": "Experienced"}]} />
            <SkillCard title="MLOps" subject={[{"MLflow": "Intermidiate"}, {"DVC":"Intermidiate"}, {"Docker": "Intermidiate"}, {"CI / CD": "Intermidiate"}]} />
            <SkillCard title="GenAI" subject={[{"LangChain": "Experienced"}, {"LangGraph": "Experienced"}]} />
        </div>
    </div>
  )
}

export default Skills
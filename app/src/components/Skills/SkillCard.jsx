import React from 'react'
import check from "../../assets/checkmark.png"
import "./SkillCard.css"
const SkillCard = (props) => {
  return (
    <div className='skill-card container col-sm-12'>
        <h3 className='title'>{props.title}</h3>
        <div className="skill-grid">
            {props.subject.map((sub, index) => {
            const key = Object.keys(sub)[0]
            const value = sub[key]

            return (
                <div className="sub-box" key={index}>
                    <img src={check} alt="check" />
                    <div className="skill-name">
                        <p className='key'>{key}</p>
                        <p >{value}</p>
                    </div>
                </div>
            )
        })}
        </div>
        
    </div>
  )
}

export default SkillCard
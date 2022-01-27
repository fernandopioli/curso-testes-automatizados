/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css'
import { useState } from 'react'

const App = () => {

  const [skillData, setSkillData] = useState({
    "skillName": "test",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  })
  const [skillsData, setSkillsData] = useState([{
    "skillName": "",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  }])

  const [showSkill, setShowSkill] = useState(false)
  const [showSkills, setShowSkills] = useState(false)

  const [inputSkill, setInputSkill] = useState('')
  const [inputDev, setInputDev] = useState('')
  const [inputTec, setInputTec] = useState('')
  const [inputRoles, setInputRoles] = useState('')

  let listSkills = skillsData.map((skill, index) =>
      <ul key={index}>
        <li>Skill Name: {skill.skillName}</li>
        <li>Developers:
          <ul>
          <li>{skill.developers[0]}</li>
          <li>{skill.developers[1]}</li>
          </ul>
        </li>
        <li>Technologies:
          <ul>
          <li>{skill.profile.technologies[0]}</li>
          <li>{skill.profile.technologies[1]}</li>
          </ul>
        </li>
      </ul>)

  let name = <><h3>{skillData.skillName}</h3>
    <ul>
    <li>Skill Name: {skillData.skillName}</li>
    <li>Developers:
      <ul>
        <li>{skillData.developers[0]}</li>
        <li>{skillData.developers[1]}</li>
      </ul>
    </li>
    <li>Technologies:
      <ul>
        <li>{skillData.profile.technologies[0]}</li>
        <li>{skillData.profile.technologies[1]}</li>
      </ul>
    </li>
  </ul></>

  function loadSkills() {
    setInputSkill('')
    setInputDev('')
    setInputTec('')
    setInputRoles('')
    setShowSkill(false)
    setShowSkills(true)
    fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills')
        .then(response => response.json())
      .then(data => {
        setSkillsData(data)
        })
  }
  

  return (
      <div className="App">
        <header className="App-header">
          <h1>
            Devs App
          </h1>
      </header>
        <label htmlFor="input-skill">Skill Name</label>
        <input id="input-skill" className='input1' onChange={e =>setInputSkill(e.target.value)} value={inputSkill}></input>
        <label htmlFor="input-developer">Developers</label>
        <input id="input-developer" className='input1' onChange={e =>setInputDev(e.target.value)} value={inputDev}></input>
        <label htmlFor="input-tec">Technologies</label>
        <input id="input-tec" className='input1' onChange={e =>setInputTec(e.target.value)} value={inputTec}></input>
        <label htmlFor="input-roles">Roles</label>
        <input id="input-roles" className='input1' onChange={e =>setInputRoles(e.target.value)} value={inputRoles}></input>
        <a id="add-skill-button" className="button1" onClick={() => loadSkills()}>Add Skills</a>

          {showSkill? name : ''}
          {showSkills? listSkills: ''}
    </div>
    )
}

export default App

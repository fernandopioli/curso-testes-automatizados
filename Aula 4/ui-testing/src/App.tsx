/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState } from 'react';

const App = () => {

  const [skillData, setSkillData] = useState({
    "skillName": "test",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  });
  const [skillsData, setSkillsData] = useState([{
    "skillName": "",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  }]);

  const [showSkill, setShowSkill] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showFormReady, setShowFormReady] = useState(true);

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
      </ul>);

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
  </ul></>;

  function loadSkills() {
    setShowSkill(false);
    setShowSkills(true);
    fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills')
        .then(response => response.json())
      .then(data => {
        setSkillsData(data);
        });
  }
  function addSkills() {
    setShowSkill(false);
    setShowSkills(true);
    loadSkills()
    
  }

  return (
      <div className="App">
        <header className="App-header">
          <h1>
            Developers App
          </h1>
      </header>
      <form>
        <label htmlFor="input-skill">Skill Name</label>
        <input id="input-skill" className='input1'></input>
        <label htmlFor="input-developer">Developers</label>
        <input id="input-developer" className='input1'></input>
        <label htmlFor="input-tec">Technologies</label>
        <input id="input-tech" className='input1'></input>
        <label htmlFor="input-roles">Roles</label>
        <input id="input-roles" className='input1'></input>
        <button id="add-skill-button" disabled={!showFormReady} className="button1" onClick={() => addSkills()}>Add Skills</button>
      </form>

          {showSkill? name : ''}
          {showSkills? listSkills: ''}
    </div>
    );
}

export default App;

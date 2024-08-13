import locationIcon from './imgs/location-icon.png'
import emailIcon from './imgs/email-icon.png'
import phoneIcon from './imgs/phone-icon.png'

import './styles.css'
import { useState } from 'react'

function App() {

  const [firstName, setFirstName] = useState('FIRST')
  const [lastName, setLastName] = useState('LAST')
  const [title, setTitle] = useState('PROFESSIONAL TITLE')
  const [profile, setProfile] = useState("I'm a season developer with 5 year of experience in the career space. I've helped over 100 business increase their reach by creating websites that are both user and SEO friendly")
  const [school, setSchool] = useState('Company Name')
  const [degree, setDegree] = useState('Degree')
  const [company, setCompany] = useState('Company Name')
  const [position, setPosition] = useState('Position Title')
  const [responsibility, setResponsibility] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a voluptates necessitatibus distinctio sapiente sit ducimus labore, vero omnis vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, ducimus.")
  const [skill1, setSkill1] = useState('skill')
  const [skill2, setSkill2] = useState('skill')
  const [phone, setPhone] = useState('+23485797533')
  const [email, setEmail] = useState('YOUREMALI@GMAIL.COM')
  const [address, setAddress] = useState('67 NEW YORK ROAD, LAGOS, NIGERIA')

  function handleFirstName(e){
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handleTitle(e){
    setTitle(e.target.value)
  }

  function handleProfile(e){    
    setProfile(e.target.value)
  }

  function handleSchool(e){
    setSchool(e.target.value)
  }

  function handleDegree(e){
    setDegree(e.target.value)
  }

  function handleCompany(e){
    setCompany(e.target.value)
    
  }
  
  function handlePosition(e){
    setPosition(e.target.value)
    console.log('a');
  }

  function handleResponsibility(e){
    setResponsibility(e.target.value)
  }

  function handleSkill1(e){
    setSkill1(e.target.value)
  }
  
  function handleSkill2(e){
    setSkill2(e.target.value)
  }

  function handlePhone(e){
    setPhone(e.target.value)
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handleAddress(e){
    setAddress(e.target.value)
  }

  return (
    <div className='top'>
    <div className="cv-form">
      <div className="personal-info-form">
        <h1>Personal Information</h1>
        <input className='firstName-input' type="text" onChange={handleFirstName} placeholder='First Name' />
        <input className='lastName-input' type="text" onChange={handleLastName} placeholder='Last Name' />
        <input className='title-input' type="text" onChange={handleTitle} placeholder='Professional Title' />
      </div>
      <div className="profile-form">
        <h1>Profile</h1>
        <textarea name="profile" id="profile" onChange={handleProfile} cols={30} rows={10} placeholder='About yourself'></textarea>
      </div>
      <div className="education-form">
        <h1>Education</h1>
        <input type="text" className="school-input" onChange={handleSchool} placeholder='School' />
        <input type="text" className="degree-input" onChange={handleDegree} placeholder='Degree' />
      </div>
      <div className="work-exp-form">
        <h1>Work Experience</h1>
        <input type="text" className="company-input" onChange={handleCompany} placeholder='Company'/>
        <input type="text" className="position-input" onChange={handlePosition} placeholder='Position'/>
        <textarea className="responsibility" onChange={handleResponsibility} cols={30} rows={10} placeholder='Responsibility'/>
      </div>
      <div className="skills-form">
        <h1>Skills</h1>
        <input type="text" className="skill-input" onChange={handleSkill1} placeholder='Skill'/>
        <input type="text" className="skill-input" onChange={handleSkill2} placeholder='Skill'/>
      </div>
      <div className="contact-form">
        <h1>Contact</h1>
        <input type="tel" className='phone-input' onChange={handlePhone} placeholder='Phone' />
        <input type="email" className='email-inut' onChange={handleEmail} placeholder='Email' />
        <input type="text" className='address-input' onChange={handleAddress} placeholder='Address'/>
      </div>
    </div>
    <div className='cv-card'>
      <header>
        <h2 className="fullname"><span className='bold'>{firstName == '' ? 'First' : firstName}</span> {lastName == '' ? 'Last' : lastName}</h2>
        <h2 className="title">{title == '' ? 'Professional Title' : title}</h2>
      </header>

      <div className="main">
        <div className="profile">
          <h2 className='heading'>Profile</h2>
          {profile == '' ? "I'm a season developer with 5 year of experience in the career space. I've helped over 100 business increase their reach by creating websites that are both user and SEO friendly" : profile}
        </div>
        <div className="contact">
          <h2 className='heading'>Contact</h2>
          <div className="location">
            <img className='icon' src={locationIcon} alt="Location" />
            {address == '' ? '67 NEW YORK ROAD, LAGOS, NIGERIA' : address}
          </div>
          <div className="email">
            <img src={emailIcon} alt="Email" className="icon" />
            {email == '' ? 'YOUREMALI@GMAIL.COM' : email}
          </div>
          <div className="phone">
            <img src={phoneIcon} alt="Telephone number" className="icon" />
            {phone == '' ? '+23485797533' : phone}
          </div>
        </div>
        <div className="education">
        <h2 className='heading'>Education</h2>
          <p className="degree bold">{degree == '' ? 'Degree' : degree}</p>
          <p className="school-name">{school == '' ? 'Company Name' : school}</p>
        </div>
        <div className="skills">
          <h2 className='heading'>Skills</h2>
          <p className="skill">{skill1 == '' ? 'Skill' : skill1}</p>
          <p className="skill">{skill2 == '' ? 'Skill' : skill2}</p>
        </div>
        <div className="work-exp">
          <h2 className='heading'>Work Experience</h2>
          <p className="position bold">{position == '' ? 'Position Title' : position}</p>
          <p className="company">{company == '' ? 'Company Name' : company}</p>
          <p>{responsibility == '' ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a voluptates necessitatibus distinctio sapiente sit ducimus labore, vero omnis vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, ducimus.' : responsibility}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App

import React, { useCallback, useRef, useState } from 'react'
import "../styles/Home.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeout = useRef({timeout: null}).current;

  const onClick = useCallback(() => {
    navigator.clipboard.writeText('juliorojas81871@gmail.com');
    if(timeout.timeout) {
      clearTimeout(timeout.timeout);
    }
    setShowTooltip(true)
    timeout.timeout = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
  }, [])

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Julio Rojas</h2>
        <div className='prompt'> 
          <p>I am a software developer that love to learn and create</p>
          <a href="https://www.linkedin.com/in/juliocesarrojasjr/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          <a className='tooltip-container' onClick={onClick}>
            <EmailIcon />
            <div className={`tooltip-container__tooltip ${showTooltip ? "tooltip-container__tooltip_active" : ""}`}>
              Email Copied
            </div>
          </a>
          <a href="https://github.com/juliorojas81871" target="_blank" rel="noreferrer"><GithubIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Angular, NPM, MaterialUI
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, MySQL, MongoDB, DynamoDB
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C++, TypeScript, Git</span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home
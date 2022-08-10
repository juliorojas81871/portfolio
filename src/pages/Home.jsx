import React from 'react'
import "../styles/Home.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Julio Rojas</h2>
        <div className='prompt'> 
          <p>I am a software developer that love to learn and create</p>
          <a href="https://www.linkedin.com/in/juliocesarrojasjr/" target="_blank"><LinkedInIcon /></a>
          <a onClick={() =>  navigator.clipboard.writeText('juliorojas81871@gmail.com')}>
                    <EmailIcon />
          </a>
          <a href="https://github.com/juliorojas81871" target="_blank"><GithubIcon /></a>
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
import React from 'react'
import "../styles/Footer.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className='footer'>
            <div className='socialMedia'>  
                <a href="https://www.linkedin.com/in/juliocesarrojasjr/" target="_blank"><LinkedInIcon /></a>
                <a onClick={() =>  navigator.clipboard.writeText('juliorojas81871@gmail.com')}>
                    <EmailIcon />
                </a>
                
            </div>

            <p> &copy; { currentYear } add website url here</p>
        </div>
    );
}

export default Footer


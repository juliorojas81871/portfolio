import React, { useCallback, useRef, useState }  from 'react'
import "../styles/Footer.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"

function Footer() {
    const currentYear = new Date().getFullYear()
    
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
        <div className='footer'>
            <div className='socialMedia'>  
                <a href="https://www.linkedin.com/in/juliocesarrojasjr/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a className='tooltip-containerf' onClick={onClick}>
                    <EmailIcon sx={{ "&:hover": { color: "red" } }}/>
                    <div className={`tooltip-container__tooltipf ${showTooltip ? "tooltip-container__tooltip_activef" : ""}`}>
                        Email Copied
                    </div>
                </a>   
            </div>

            <p> &copy; { currentYear } Julio C Rojas</p>
        </div>
    );
}

export default Footer


import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function NavBar() {
    const[expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    
    //This will run every time the user change location cause thw expand Navbar to close 
    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

    return (
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                {/* it will check the previos value and do the complete opposite*/}
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to="/portfolio">Home</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/experience">Experience</Link>

            </div>
        </div>
    );
}

export default NavBar
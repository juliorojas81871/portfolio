import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id:1, 
            link:'home'
        },
        {
            id:2, 
            link:'projects'
        },
        {
            id:3, 
            link:'technologies'
        },
        {
            id:4, 
            link:'timeLine'
        },
        {
            id:5, 
            link:'contact'
        }
    ]
    return (
        <div className='z-40 flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky top-0'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>JR Portfolio</h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({id, link}) =>(
                    <li 
                        key={id} 
                        className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'
                    >
                        <Link to={link} smooth duration={500} offset={-80}> 
                            {link}
                        </Link>
                    </li>
                ))}  
            </ul>
            <div 
                onClick={() => setNav(!nav)} 
                className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
            </div>
            {/* for NavBar in mobile */}
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-black text-gray-300'>
                {links.map(({id, link}) =>(
                    <li 
                        key={id} 
                        className='x-4 cursor-pointer capitalize py-6 text-4xl'
                    >
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500} offset={-80}> 
                            {link}
                        </Link>
                    </li>
                ))}
                </ul>      
            )}
            
        </div>
        
    )
}

export default NavBar
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';

const Home = () => {
  return (
    <div
    name='home'
    className='min-h-screen flex items-center w-full bg-gradient-to-b from-black via-black  to-gray-800'
  >
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center items-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Hello, My Name is 
                </h2>
                <h2 className='text-4xl sm:text-7xl font-bold text-white font-signature'>
                    Julio Rojas
                </h2>
                <p className='text-gray-300 py-4 max-w-md text-center text-2xl sm:test-3xl'>
                    I am a web developer that love to learn and create.
                    Currently, I am using technologies like
                    React, Tailwind, Node.JS and MongoDB.
                </p>
            <a
                href='/Julio Rojas - Resume.pdf'
                download={true}
                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
                Download Resume
                <span className='group-hover:rotate-180 duration-300'>
                    <AiOutlineDownload size={25} className='ml-1'/>
                </span>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Home
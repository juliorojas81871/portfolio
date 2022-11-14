import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { BsFillPersonLinesFill } from "react-icons/bs";

interface Props {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        {/* social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/juliocesarrojasjr/"
          target="_blank"
          rel="noreferrer"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/juliorojas81871"
          target="_blank"
          rel="noreferrer"
          fgColor="gray"
          bgColor="transparent"
        />
        <BsFillPersonLinesFill className='ml-2 cursor-pointer ' style={{color:'gray'}} size={26} />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;

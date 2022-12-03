import { useRef } from "react";
import { motion } from "framer-motion";
import * as BS from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { Social } from "../typings";
import Link from "next/link";

const DynamicIcon: React.FC<{
  name?: keyof typeof BS;
  className?: string;
  size?: number;
}> = ({ name, className, size }) => {
  const Icon = BS[name || "BsQuestionCircle"] || BS.BsQuestionCircle;
  return <Icon size={size} className={className} />;
};

interface Props {
  socials: Social[];
}
const Header = ({ socials }: Props) => {
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
        {socials.map((social) =>
          social.url ? (
            <a
              key={social._id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="headerButton p-1.5"
            >
              <DynamicIcon name={social.icon} size={24} />
            </a>
          ) : (
            <a
              className="headerButton p-1.5"
              href={social.downloadUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              <DynamicIcon name={social.icon} size={24} />
            </a>
          )
        )}
      </motion.div>
      <Link href="#contact">
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
          className="flex flex-row items-center headerButton p-1.5"
        >
          <VscMail size={25} stroke-width="0.5" />
          <p className="pl-2 uppercase hidden md:inline-flex text-sm ">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;

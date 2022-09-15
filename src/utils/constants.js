import {
  dashboard,
  tetris,
  YTClone,
  notes,
  secrets,
  cyberpunk,
  css,
  react,
  github,
  html,
  javascript,
  mongodb,
  node,
  tailwind,
} from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdWork, MdSchool } from "react-icons/md";

export const projects = [
  {
    id: 1,
    name: "Dashboard",
    src: dashboard,
    urlCode: "https://github.com/juliorojas81871/dashboard ",
    urlLive: "https://juliorojas81871.github.io/dashboard/",
  },
  {
    id: 2,
    name: "Tetris",
    src: tetris,
    urlCode: "https://github.com/juliorojas81871/tetris ",
    urlLive: "https://juliorojas81871.github.io/tetris/",
  },
  {
    id: 3,
    name: "YouTube Clone",
    src: YTClone,
    urlCode: "https://github.com/juliorojas81871/youtube-clone ",
    urlLive: "https://juliorojas81871.github.io/youtube-clone/",
  },
  {
    id: 4,
    name: "To-Do",
    src: cyberpunk,
    urlCode: "https://github.com/juliorojas81871/cyberpunk",
    urlLive: "https://juliorojas81871.github.io/cyberpunk/",
  },
  {
    id: 5,
    name: "Notes",
    src: notes,
    urlCode: "https://github.com/juliorojas81871/Notes",
    urlLive: "https://keeper--notes--app.herokuapp.com/",
  },
  {
    id: 6,
    name: "Secrets",
    src: secrets,
    urlCode: "https://github.com/juliorojas81871/secrets",
    urlLive: "https://secrets--app.herokuapp.com/",
  },
];

export const links = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/juliocesarrojasjr/",
    style: "rounded-tr-md",
    icon: <FaLinkedin size={30} />,
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/juliorojas81871",
    icon: <FaGithub size={30} />,
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:juliorojas81871@gmail.com",
    icon: <HiOutlineMail size={30} />,
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/Julio Rojas - Resume.pdf",
    download: true,
    style: "rounded-br-md",
  },
];

export const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: react,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: mongodb,
    title: "MongoDB",
    style: "shadow-green-500",
  },
  {
    id: 7,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 8,
    src: node,
    title: "Node",
    style: "shadow-emerald-500",
  },
];

export const timeline = [
  {
    id: 1,
    classNameV: "vertical-timeline-element--education",
    date: "September 2015 - December 2018",
    icon: <MdSchool />,
    title: "Bergen Community College",
    location: "Paramus, NJ",
    message: ["Associate in Science, Major in Computer Science"],
  },
  {
    id: 2,
    classNameV: "vertical-timeline-element--work",
    date: "May 2018 - April 2020",
    icon: <MdWork />,
    title:
      "Assistant to Enterprise Storage Team - Memorial Sloan Kettering Cancer Center",
    location: "Lyndhurst, NJ",
    message: [
      `Install new cables to new servers by the customer's request to increase efficacy.`,
      `Upheld security and performance by updating and removing old servers.`,
      `Customize Material UI to follow brand styling guidelines.`,
      `Schedule the retirement and creation of servers in an on-site data center to enhance performance and cost-efficiency.`,
      `Schedule the retirement and creation of servers in an on-site data center to enhance performance and cost-efficiency.`,
    ],
  },
  {
    id: 3,
    classNameV: "vertical-timeline-element--education",
    date: "January 2019 - August 2021",
    icon: <MdSchool />,
    title: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    message: ["Bachelor of Science in Computer Science"],
  },
  {
    id: 4,
    classNameV: "vertical-timeline-element--education",
    date: "September 2021 - Octuber 2021",
    icon: <AiFillStar />,
    title: "HTML, CSS, and Javascript for Web Developers",
    location: "Online",
    message: [],
  },
  {
    id: 5,
    classNameV: "vertical-timeline-element--education",
    date: "Octuber 2021",
    icon: <AiFillStar />,
    title: "AWS Certified Cloud Practitioner",
    location: "Online",
    message: [],
  },
  {
    id: 6,
    classNameV: "vertical-timeline-element--work",
    date: "May 2021 - Current",
    icon: <MdWork />,
    title: "Jr. Frontend Website Development - Shurable Inc",
    location: "Remote",
    message: [
      `Create reusable React component.`,
      `Optimizing web pages for mobile view.`,
      `Customize Material UI to follow brand styling guidelines`,
      `Follow tight deadlines and track progress using issue tracking systems`,
      `Debug, document, and fix client-facing bugs.`,
    ],
  },
];

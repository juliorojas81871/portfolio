import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdWork, MdSchool } from "react-icons/md";

export const projects = [
  {
    id: 1,
    name: "Dashboard",
    src: "/assets/projects/dashboard.jpg",
    urlCode: "https://github.com/juliorojas81871/dashboard ",
    urlLive: "https://juliorojas81871.github.io/dashboard/",
  },
  {
    id: 2,
    name: "Tetris",
    src: "/assets/projects/tetris.jpg",
    urlCode: "https://github.com/juliorojas81871/tetris ",
    urlLive: "https://juliorojas81871.github.io/tetris/",
  },
  {
    id: 3,
    name: "YouTube Clone",
    src: "/assets/projects/YTClone.jpg",
    urlCode: "https://github.com/juliorojas81871/youtube-clone ",
    urlLive: "https://juliorojas81871.github.io/youtube-clone/",
  },
  {
    id: 4,
    name: "Cyberpunk",
    src: "/assets/projects/cyberpunk.jpg",
    urlCode: "https://github.com/juliorojas81871/cyberpunk",
    urlLive: "https://juliorojas81871.github.io/cyberpunk/",
  },
  {
    id: 5,
    name: "Snapchat",
    src: "/assets/projects/snapchat.jpg",
    urlCode: "https://github.com/juliorojas81871/snapchat-clone",
    urlLive: "https://snapchat-clone-6c3c4.web.app/",
  },
  {
    id: 6,
    name: "Spotify",
    src: "/assets/projects/spotify.jpg",
    urlCode: "https://github.com/juliorojas81871/spotify-clone",
    urlLive: "https://spotify-clone-jnkj.vercel.app/login",
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
    src: "/assets/html.png",
    title: "HTML",
    color: "rgb(249,115,22)",
  },
  {
    id: 2,
    src: "/assets/css.png",
    title: "CSS",
    color: "rgb(59,130,246)",
  },
  {
    id: 3,
    src: "/assets/javascript.png",
    title: "JavaScript",
    color: "rgb(234,179,8)"
  },
  {
    id: 4,
    src: "/assets/react.png",
    title: "React",
    color: "rgb(37,99,235)",
  },
  {
    id: 5,
    src: "/assets/tailwind.png",
    title: "Tailwind",
    color: "rgb(56,189,248)",
  },
  {
    id: 6,
    src: "/assets/mongodb.png",
    title: "MongoDB",
    color: "rgb(34,197,94)",
  },
  {
    id: 7,
    src: "/assets/github.png",
    title: "GitHub",
    color: "rgb(156,163,175)",
  },
  {
    id: 8,
    src: "/assets/node.png",
    title: "Node",
    color: "rgb(16,185,129)",
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

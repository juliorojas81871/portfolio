import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdWork, MdSchool } from "react-icons/md";

export const projects = [
  {
    id: 1,
    name: "Amazon Clone",
    src: "/assets/projects/amazon.jpg",
    urlCode: "https://github.com/juliorojas81871/amazon-clone ",
    urlLive: "https://amazon-clone-bay-sigma.vercel.app/",
  },
  {
    id: 2,
    name: "Netflix Clone",
    src: "/assets/projects/netflix.jpg",
    urlCode: "https://github.com/juliorojas81871/netflix-clone ",
    urlLive: "https://netflix-clone-nine-nu.vercel.app/",
  },
  {
    id: 3,
    name: "LinkedIn Clone",
    src: "/assets/projects/linkedin.jpg",
    urlCode: "https://github.com/juliorojas81871/linkedIn-clone ",
    urlLive: "https://linkedinclone-seven.vercel.app/home",
  },
  {
    id: 4,
    name: "YouTube Clone",
    src: "/assets/projects/YTClone.jpg",
    urlCode: "https://github.com/juliorojas81871/youtube-clone ",
    urlLive: "https://juliorojas81871.github.io/youtube-clone/",
  },
  {
    id: 5,
    name: "Spotify Clone",
    src: "/assets/projects/spotify.jpg",
    urlCode: "https://github.com/juliorojas81871/spotify-clone",
    urlLive: "https://spotify-clone-jnkj.vercel.app",
  },
  {
    id: 6,
    name: "Reddit Clone",
    src: "/assets/projects/reddit.jpg",
    urlCode: "https://github.com/juliorojas81871/reddit-clone",
    urlLive: "https://reddit-clone-lake-zeta.vercel.app/",
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
    color: "rgb(234,179,8)",
  },
  {
    id: 4,
    src: "/assets/react.png",
    title: "React",
    color: "rgb(34,211,238)",
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
  {
    id: 9,
    src: "/assets/next.png",
    title: "Next.js",
    color: "rgb(250,250,250)",
  },
  {
    id: 10,
    src: "/assets/redux.png",
    title: "Redux",
    color: "rgb(168,85,247)",
  },
  {
    id: 11,
    src: "/assets/firebase.png",
    title: "Firebase",
    color: "rgb(251,191,36)",
  },
  {
    id: 12,
    src: "/assets/typescript.png",
    title: "TypeScript",
    color: "rgb(14,165,233)",
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
    date: "May 2020 - Current",
    icon: <MdWork />,
    title: "Jr. Frontend Website Development - Shurable Inc",
    location: "Remote",
    message: [
      `Create reusable React component.`,
      `Optimizing web pages for mobile view.`,
      `Customize Material UI to follow brand styling guidelines`,
      `Follow tight deadlines and track progress using issue tracking systems`,
      `Debug, document, and fix client-facing bugs.`,
      `Pull data from MongoDB to be used at the frontend.`,
    ],
  },
];

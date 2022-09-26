import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "technologies",
    },
    {
      id: 4,
      link: "timeLine",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="fixed w-full h-24 bg-black text-gray-300 z-20">
        <div className="flex justify-between items-center  mx-auto px-4 h-full">
          <div>
            <h1 className="text-5xl font-signature ml-2">JR Portfolio</h1>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
                >
                  <Link to={link} smooth duration={500} offset={-80}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-gray-300 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      {/* for NavBar in mobile */}
      <div
        className={`w-full bg-black text-gray-300 fixed z-10 left-0 h-fit py-12 md:hidden flex justify-center text-center text-2xl duration-500 ${
          nav ? "top-20 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="x-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;

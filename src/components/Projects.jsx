import React from "react";
import { projects } from "../utils/constants";

const Projects = () => {
  return (
    <div
      name="projects"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, name, urlCode, urlLive }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={urlLive} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt={name}
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
                <a
                  href={urlLive}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-5 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={urlCode}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-5 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

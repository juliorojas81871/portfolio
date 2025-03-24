import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      setIsAtStart(container.scrollLeft <= 0);
      setIsAtEnd(
        container.scrollLeft >= container.scrollWidth - container.clientWidth - 1
      );
    };

    container.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition(); // Initial check

    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const nextProject = () => {
    const container = scrollContainerRef.current;
    if (!container || isAtEnd) return;

    container.scrollTo({
      left: container.scrollLeft + container.clientWidth,
      behavior: "smooth",
    });
  };

  const prevProject = () => {
    const container = scrollContainerRef.current;
    if (!container || isAtStart) return;

    container.scrollTo({
      left: container.scrollLeft - container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div 
        ref={scrollContainerRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-none"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project._id}
            className="w-screen flex flex-col md:space-y-5 items-center justify-center flex-shrink-0 snap-center p-9 md:p-44 h-screen"
          >
            <Link
              key={project._id}
              href={project.linkToBuild}
              rel="noreferrer noopener"
              target="_blank"
            >
              <motion.div
                initial={{
                  y: -280,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative md:w-[500px] md:h-[300px]"
              >
                <Image
                  src={urlFor(project?.image).url()}
                  alt={project.title}
                  fill
                  className="object-contain cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </motion.div>
            </Link>

            <div className="space-y-3 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-4xl font-semibold text-center">
                <span className="decoration-[#F7AB0A]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-center space-x-4 my-4">
                <button
                  onClick={prevProject}
                  disabled={isAtStart}
                  aria-label="Previous project"
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isAtStart
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#F7AB0A]/20"
                  }`}
                >
                  <ChevronLeftIcon className="h-8 w-8 text-[#F7AB0A]" />
                </button>
                <button
                  onClick={nextProject}
                  disabled={isAtEnd}
                  aria-label="Next project"
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isAtEnd
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#F7AB0A]/20"
                  }`}
                >
                  <ChevronRightIcon className="h-8 w-8 text-[#F7AB0A]" />
                </button>
              </div>

              <div className="flex space-x-2 my-2">
                {project.technologies.map((technology) => (
                  <div key={technology._id} className="relative w-[35px] h-[35px]">
                    <Image
                      src={urlFor(technology.image).url()}
                      alt=""
                      fill
                      className="rounded-full object-cover"
                      sizes="35px"
                    />
                  </div>
                ))}
              </div>
              <p className="md:text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

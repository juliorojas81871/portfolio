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
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const nextIndex = (currentIndex + 1) % projects.length;
    container.scrollTo({
      left: container.clientWidth * nextIndex,
      behavior: "smooth",
    });
    setCurrentIndex(nextIndex);
  };

  const prevProject = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    container.scrollTo({
      left: container.clientWidth * prevIndex,
      behavior: "smooth",
    });
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    if (!scrollContainerRef.current || isHovered) return;

    const interval = setInterval(() => {
      nextProject();
    }, 8000); // Increased to 8 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project._id}
            className="w-screen flex flex-col items-center justify-center flex-shrink-0 snap-center p-4 md:p-10 lg:p-20 h-screen"
          >
            <Link
              key={project._id}
              href={project.linkToBuild}
              rel="noreferrer noopener"
              target="_blank"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[300px] mx-auto"
                style={{ position: 'relative' }}
              >
                <Image
                  src={urlFor(project?.image).url()}
                  alt={project.title}
                  fill
                  className="object-contain cursor-pointer"
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
                  style={{ position: 'absolute' }}
                />
              </motion.div>
            </Link>

            <div className="space-y-3 md:space-y-5 px-4 md:px-10 max-w-6xl mt-4 md:mt-8">
              <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center">
                <span className="decoration-[#F7AB0A]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-center space-x-4 my-2 md:my-4">
                <button
                  onClick={prevProject}
                  disabled={i === 0}
                  aria-label="Previous project"
                  className={`p-2 rounded-full transition-all duration-200 ${
                    i === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#F7AB0A]/20"
                  }`}
                >
                  <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8 text-[#F7AB0A]" />
                </button>
                <button
                  onClick={nextProject}
                  disabled={i === projects.length - 1}
                  aria-label="Next project"
                  className={`p-2 rounded-full transition-all duration-200 ${
                    i === projects.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#F7AB0A]/20"
                  }`}
                >
                  <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8 text-[#F7AB0A]" />
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-2 my-2">
                {project.technologies.map((technology) => (
                  <div key={technology._id} className="relative w-[35px] h-[35px] flex-shrink-0">
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
              <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
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

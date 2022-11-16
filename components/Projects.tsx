import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <motion.div
            key={project}
            className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
          >
            <Link
              key={project}
              href="https://github.com/juliorojas81871/amazon-clone"
            >
              <motion.img
                initial={{
                  y: -300,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="/assets/amazon.jpg"
                className="md:mb-0 flex-shrink-0 md:w-[500px] md:h-[300px] object-contain cursor-pointer"
              />
            </Link>

            <div className="space-y-3 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-4xl font-semibold text-center">
                <span className="decoration-[#F7AB0A]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Amazon Clone
              </h4>
              <Image
                className="rounded-full"
                src="/assets/next.png"
                width={40}
                height={40}
                alt=""
              />
              <p className="md:text-lg text-center md:text-left">
                This code is an amazon clone where you can buy items and see
                your past orders. The program will also save items in your cart
                until you place an order.
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

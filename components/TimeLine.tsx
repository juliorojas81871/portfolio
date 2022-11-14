import { motion } from "framer-motion";
import { ExperienceEducationCard } from "./";

type Props = {};

const ExperienceEducation = (props: Props) => {
  return (
    <motion.div
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        TimeLine
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceEducationCard />
        <ExperienceEducationCard />
        <ExperienceEducationCard />
      </div>
    </motion.div>
  );
};

export default ExperienceEducation;

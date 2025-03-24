import { motion } from "framer-motion";
import type { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";
import { useState } from "react";

interface Props {
  directionLeft?: boolean;
  skill: SkillType;
  isActive?: boolean;
}

const Skill = ({ directionLeft, skill, isActive = false }: Props) => {
  const [isAnimationComplete] = useState(true);

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className={`rounded-full border border-gray-500 object-cover h-[calc(20vh-80px)] w-[calc(20vh-80px)] md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition duration-0 ease-in-out ${
          isAnimationComplete ? (isActive ? "grayscale" : "group-hover:grayscale") : "grayscale-0"
        }`}
      />
      <div className={`absolute transition duration-0 ease-in-out bg-white h-[calc(20vh-80px)] w-[calc(20vh-80px)] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ${
        isAnimationComplete ? (isActive ? "opacity-80" : "opacity-0 group-hover:opacity-80") : ""
      }`}>
      </div>
    </div>
  );
};

export default Skill;

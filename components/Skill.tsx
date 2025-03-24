import { motion } from "framer-motion";
import type { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";
import { useState } from "react";

interface Props {
  directionLeft?: boolean;
  skill: SkillType;
  isActive?: boolean;
  isHovered?: boolean;
}

const Skill = ({ directionLeft, skill, isActive = false, isHovered = false }: Props) => {
  const [isAnimationComplete] = useState(true);

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className={`rounded-full border border-gray-500 object-cover h-[calc(20vh-80px)] w-[calc(20vh-80px)] md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out ${
          isHovered || isActive ? "grayscale" : "grayscale-0"
        }`}
      />
      <div className={`absolute inset-0 transition duration-300 ease-in-out bg-white rounded-full z-0 ${
        isHovered || isActive ? "opacity-80" : "opacity-0"
      }`}>
      </div>
    </div>
  );
};

export default Skill;

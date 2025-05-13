import { motion } from "framer-motion";
import type { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";
import { useState } from "react";

interface Props {
  skill: SkillType;
  isActive?: boolean;
  isHovered?: boolean;
}

const Skill = ({ skill, isActive = false, isHovered = false }: Props) => {
  const [isAnimationComplete] = useState(true);

  return (
    <div className="group relative flex cursor-pointer w-[calc(20vh-80px)] h-[calc(20vh-80px)] md:w-28 md:h-28 xl:w-32 xl:h-32">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className={`rounded-full border border-gray-500 object-cover w-full h-full filter transition duration-300 ease-in-out ${
          isHovered || isActive ? "grayscale" : "grayscale-0"
        }`}
        style={{ position: 'relative', zIndex: 1 }}
      />
      <div 
        className={`absolute inset-0 transition duration-300 ease-in-out bg-[#F7AB0A]/40 rounded-full ${
          isHovered || isActive ? "opacity-80" : "opacity-0"
        }`}
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default Skill;

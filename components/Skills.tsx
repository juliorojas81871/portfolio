import { motion } from "framer-motion";
import { Skill } from "./";
import { Skill as SkillType } from "../typings";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

interface Props {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [shownWords, setShownWords] = useState<Set<string>>(new Set());
  const [text, count] = useTypewriter({
    words: [skills[currentSkillIndex]?.title || "Hover over a skill for current proficiency"],
    loop: false,
    delaySpeed: 1000,
    typeSpeed: 20,
    deleteSpeed: 20,
  });

  useEffect(() => {
    const currentWord = skills[currentSkillIndex]?.title || "Hover over a skill for current proficiency";
    if (!shownWords.has(currentWord)) {
      setShownWords(prev => new Set(Array.from(prev).concat(currentWord)));
    }
  }, [currentSkillIndex, skills, shownWords]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        <span>{shownWords.has(skills[currentSkillIndex]?.title || "Hover over a skill for current proficiency") 
          ? (skills[currentSkillIndex]?.title || "Hover over a skill for current proficiency")
          : text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill, index) => (
          <div 
            key={skill._id} 
            className="transition-all duration-300"
            onMouseEnter={() => setCurrentSkillIndex(index)}
          >
            <Skill skill={skill} isActive={index === currentSkillIndex} />
          </div>
        ))}

        {/* Get second half of skills and map with direction left */}
        {skills?.slice(skills.length / 2, skills.length).map((skill, index) => (
          <div 
            key={skill._id} 
            className="transition-all duration-300"
            onMouseEnter={() => setCurrentSkillIndex(index + skills.length / 2)}
          >
            <Skill skill={skill} directionLeft isActive={index + skills.length / 2 === currentSkillIndex} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

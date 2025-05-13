import { motion } from "framer-motion";
import { Skill } from "./";
import { Skill as SkillType } from "../typings";
import { Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";

interface Props {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const currentWord = hoveredSkill || skills[currentSkillIndex]?.title || "Hover over a skill for current proficiency";

  useEffect(() => {
    setIsTyping(true);
    let currentIndex = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (isDeleting) {
        if (currentIndex > 0) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex--;
        } else {
          isDeleting = false;
          currentIndex = 0;
        }
      } else {
        if (currentIndex <= currentWord.length) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }
    }, 100);

    return () => {
      clearInterval(interval);
      isDeleting = true;
    };
  }, [currentSkillIndex, currentWord, hoveredSkill]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!hoveredSkill) {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [skills.length, hoveredSkill]);

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
      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm">
        <span>{displayedText}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill, index) => (
          <div 
            key={skill._id}
            className="transition-all duration-300"
            onMouseEnter={() => setHoveredSkill(skill.title)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Skill
              skill={skill}
              isActive={!hoveredSkill && index === currentSkillIndex}
              isHovered={hoveredSkill === skill.title}
            />
          </div>
        ))}

        {/* Get second half of skills and map with direction left */}
        {skills?.slice(skills.length / 2, skills.length).map((skill, index) => (
          <div
            key={skill._id}
            className="transition-all duration-300"
            onMouseEnter={() => setHoveredSkill(skill.title)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Skill
              skill={skill}
              isActive={!hoveredSkill && index + skills.length / 2 === currentSkillIndex}
              isHovered={hoveredSkill === skill.title}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

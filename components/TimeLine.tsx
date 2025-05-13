import { motion } from "framer-motion";
import { TimeLineCard } from "./";
import { Timeline } from "../typings";
import { useState, useEffect, useRef } from "react";

type Props = {
  timelines: Timeline[];
};

const ExperienceEducation = ({ timelines }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCentered, setIsCentered] = useState(false);

  const checkIfCentered = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0].clientWidth;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    
    // Check if any card is centered (within 10px tolerance)
    const tolerance = 10;
    const isAnyCardCentered = Array.from(container.children).some((card, index) => {
      const cardLeft = index * cardWidth;
      const cardCenter = cardLeft + (cardWidth / 2);
      const containerCenter = scrollLeft + (containerWidth / 2);
      return Math.abs(cardCenter - containerCenter) < tolerance;
    });
    
    setIsCentered(isAnyCardCentered);
  };

  useEffect(() => {
    if (!scrollContainerRef.current || (isHovered && isCentered)) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft >= maxScroll) {
        // Reset to beginning when reaching the end
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      } else {
        // Scroll to next card
        const nextIndex = (currentIndex + 1) % timelines.length;
        const cardWidth = scrollContainer.children[0].clientWidth;
        const scrollAmount = cardWidth * nextIndex;
        scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(nextIndex);
      }
    }, 5000); // Increased to 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, isCentered, timelines.length]);

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
      <div 
        ref={scrollContainerRef}
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onScroll={checkIfCentered}
      >
        {timelines?.map((timeline, index) => (
          <TimeLineCard 
            key={timeline._id} 
            timeline={timeline} 
            isActive={!isHovered && index === currentIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceEducation;

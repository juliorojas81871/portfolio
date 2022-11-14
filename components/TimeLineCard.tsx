import { motion } from "framer-motion";
import Image from "next/image";

interface Props {}

const ExperienceEducationCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] h-[590px] md:h-[650px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/assets/BCC-Seal.png"
        className="hidden md:flex md:w-32 md:h-32 rounded-full md:rounded-full w-[100px] h-[100px] object-cover object-center"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-3xl md:text-4xl font-light">
          Associate in Science, Major in Computer Science
        </h4>
        <p className="font-bold text-2xl mt-1">Bergen Community College</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <Image
            className="rounded-full"
            src="/assets/next.png"
            width={40}
            height={40}
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          September 2015 - December 2018
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceEducationCard;

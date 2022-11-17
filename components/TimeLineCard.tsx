import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "../typings";
import { urlFor } from "../sanity";

interface Props {
  timeline: Timeline;
}

const ExperienceEducationCard = ({ timeline }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] max-h-[calc(100vh-260px)] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-hide">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(timeline.image).url()}
        className="flex md:w-32 md:h-32 rounded-full md:rounded-full w-[100px] h-[100px] object-cover object-center"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light">
          {timeline.title}
        </h4>
        <p className="font-bold sm:text-2xl mt-1">{timeline.location}</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          {timeline.technologies &&
            timeline.technologies.map((technology) => (
              <Image
                key={technology._id}
                className="rounded-full"
                src={urlFor(technology.image).url()}
                width={40}
                height={40}
                alt=""
              />
            ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(timeline.dateStarted).toDateString()} -{" "}
          {timeline.isCurrentlyWorkingHere
            ? "Present"
            : new Date(timeline.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 sm:text-lg">
          {timeline.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceEducationCard;

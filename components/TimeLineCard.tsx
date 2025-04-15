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
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex md:w-32 md:h-32 rounded-full md:rounded-full w-[100px] h-[100px]"
      >
        <Image
          src={urlFor(timeline.image).url()}
          alt=""
          width={128}
          height={128}
          className="rounded-full object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light">
          {timeline.title}
        </h4>
        <p className="font-bold sm:text-2xl mt-1">{timeline.location}</p>
        <div className="flex flex-wrap gap-2 my-2">
          {/* tech used */}
          {timeline.technologies &&
            timeline.technologies.map((technology) => (
              <div key={technology._id} className="relative w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]">
                <Image
                  src={urlFor(technology.image).url()}
                  alt=""
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 640px) 30px, (max-width: 768px) 35px, 40px"
                />
              </div>
            ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(timeline.dateStarted).toLocaleDateString(undefined, {
            month: "long",
            year: "numeric",
          })}{" "}
          -{" "}
          {timeline.isCurrentlyWorkingHere
            ? "Present"
            : new Date(timeline.dateEnded).toLocaleDateString(undefined, {
                month: "long",
                year: "numeric",
              })}
        </p>

        {timeline.imagePoint ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={urlFor(timeline.imagePoint).url()}
              width={400}
              height={250}
              alt=""
              className="md:mb-0 flex-shrink-0 md:w-[400px] md:h-[250px] object-contain"
            />
          </motion.div>
        ) : (
          <ul className="list-disc space-y-4 ml-5 sm:text-lg">
            {timeline.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ExperienceEducationCard;

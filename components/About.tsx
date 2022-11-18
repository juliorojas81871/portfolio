import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

interface Props {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-32 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
      />
      <div className="space-y-4 md:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="md:text-lg">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;

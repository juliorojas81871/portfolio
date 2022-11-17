import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

interface Props {
  pageInfo: PageInfo;
}

const ContactMe = ({ pageInfo }: Props) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-2 md:space-y-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <a className="md:text-2xl" href={`callto:${pageInfo.phoneNumber}`}>{pageInfo.phoneNumber}</a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7  animate-pulse" />
            <a className="md:text-2xl" href={`mailto:${pageInfo.email}`}>
              {pageInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7  animate-pulse" />
            <p className="md:text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 md:w-fit mx-auto"
          action={process.env.NEXT_PUBLIC_GETFORM} method="POST">
        
          <div className="flex space-x-2">
            <input
              className="contactInput"
              placeholder="Name"
              name="name"
              type="text"
            />
            <input
              className="contactInput"
              placeholder="Email"
              name="email"
              type="text"
            />
          </div>
          <input
            className="contactInput"
            placeholder="Subject"
            name="subject"
            type="text"
          />
          <textarea
            className="contactInput md:h-36"
            placeholder="Message"
            name="message"
          />

          <button
            className="bg-[#F7AB0A] py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;

import { links } from "../utils/constants";

const Contact = () => {
  return (
    <div
      name="contact"
      className="min-h-screen flex items-center w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>

          <p className="py-6">Contact me through Social Media</p>

          <div className="w-full flex items-center justify-center gap-5 text-center py-8 px-12 sm:px-0">
            {links.map(
              ({ id, href, icon }) =>
                id !== 4 && (
                  <a
                    className={`shadow-md hover:scale-105 duration-500 py-2 px-4 rounded-lg shadow-gray-300`}
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                    key={id}
                  >
                    <p className="mt-2"> {icon} </p>
                  </a>
                )
            )}
          </div>
          <p className="py-6">
            Submit the form below or email me at juliorojas81871@gmail.com to
            get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action={process.env.REACT_APP_GETFORM}
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

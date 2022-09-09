import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Contact
            </p>
            <p className="py-6">Contact me through Social Media</p>
                <div className="w-full grid grid-cols-2 gap-5 text-center py-8 px-12 sm:px-0">
                    <a
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600`}
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/juliocesarrojasjr'
                    >
                        <p className="mt-2"> Linkedin </p>
                    </a>
                    <div
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600`}
                    >
                        <p className="mt-2">Linkedin</p>
                    </div>
                </div>
            
          

        </div>

      </div>
    </div>
  );
};

export default Contact;
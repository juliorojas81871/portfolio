import { techs } from "../utils/constants";
import Image from "next/image";

const Technologies = () => {
  return (
    <div
      name="technologies"
      className="min-h-screen flex items-center bg-gradient-to-b from-black to-gray-800 w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, color }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 `}
              style={{
                boxShadow: `${color} 0px 0px 10px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.008) 0px 0.282052px 0.423078px -0.0705129px, rgba(0, 0, 0, 0.008) 0px 0.141026px 0.282052px -0.141026px`,
              }}
            >
              <Image src={src} alt="" height={80} width={80} objectFit="contain"  />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

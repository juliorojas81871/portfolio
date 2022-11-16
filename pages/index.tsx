import type { NextPage } from "next";
import Head from "next/head";
import {
  Header,
  Hero,
  About,
  ExperienceEducation,
  Skills,
  Projects,
  ContactMe,
} from "../components";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>JR Portfolio</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Header />

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Experience / Education */}
      <section id="timeline" className="snap-start">
        <ExperienceEducation />
      </section>

      {/* skill */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <BsFillArrowUpCircleFill className="text-[#F7AB0A] h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { Header, Hero, About, ExperienceEducation } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0">
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
      
      <section id="TimeLine" className="snap-start">
        <ExperienceEducation />
      </section>
      

      {/* skill */}

      {/* projects */}

      {/* contact me */}
    </div>
  );
};

export default Home;
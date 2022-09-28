import {
  NavBar,
  Main,
  SocialLinks,
  TimeLine,
  Projects,
  Technologies,
  Contact,
} from "../components/index";
import "tailwindcss/tailwind.css";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>JR Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main />
      <Projects />
      <Technologies />
      <TimeLine />
      <Contact />

      <SocialLinks />
    </div>
  );
};

export default Home;

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


const Home = () => {
  return (
    <div>
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

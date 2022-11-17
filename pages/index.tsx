import Head from "next/head";
import {
  Header,
  Hero,
  About,
  TimeLine,
  Skills,
  Projects,
  ContactMe,
} from "../components";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { PageInfo, Skill, Social, Project, Timeline } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import { GetStaticProps } from "next";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchTimeline } from "../utils/fetchTimeline";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  socials: Social[];
  projects: Project[];
  timelines: Timeline[];
};

const Home = ({ skills, pageInfo, socials, projects, timelines }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>JR Portfolio</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Header socials={socials} />

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* about */}
      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience / Education */}
      <section id="timeline" className="snap-start">
        <TimeLine timelines={timelines} />
      </section>

      {/* skill */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();
  const projects: Project[] = await fetchProjects();
  const timelines: Timeline[] = await fetchTimeline();

  return {
    props: {
      pageInfo,
      skills,
      socials,
      projects,
      timelines,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { default as Project } from "../components/Projects";
import Skills from "../components/Skills";
import PageData from "../data/pageInfo.json";
import ProjectsData from "../data/projects.json";
import SkillsData from "../data/skills.json";
import SocialData from "../data/socials.json";
import { Projects, Skill, Social } from "../typings";

type Props = {
  pageInfo: any;
  projects: Projects[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scroll-smooth overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-full scrollbar-track-rounded-full  ">
      <Head>
        <title>Rana Faraz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="sticky top-0 p-5  z-20"
      >
        <Header socials={socials} />
      </motion.div>

      <section id="hero" className="snap-start scroll-smooth">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center scroll-smooth">
        <About pageInfo={pageInfo} />
      </section>

      <section id="projects" className="snap-center scroll-smooth">
        <Project projects={projects} />
      </section>

      <section id="skills" className="snap-start scroll-smooth">
        <Skills skills={skills} />
      </section>

      <section id="contact" className="snap-start scroll-smooth">
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="sticky bottom-5 mx-auto max-w-lg bg-gray-500/20 flex items-center rounded-full justify-center hover:bg-[#f7ab0a] hover:text-black transition duration-300 ease-in-out"
        >
          <ChevronUpIcon className="h-10" />
        </motion.div>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = () => {
  const skills: any[] = SkillsData;
  const projects: any[] = ProjectsData;
  const socials: any[] = SocialData;
  const pageInfo: any = PageData;

  return {
    props: {
      pageInfo,
      projects,
      socials,
      skills,
    },
  };
};

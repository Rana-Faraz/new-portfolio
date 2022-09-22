import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Projects } from "../typings";

type Props = {
  projects: Projects[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex flex-col relative h-screen text-left md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

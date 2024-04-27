import { motion } from "framer-motion";
import { Projects as ProjectsType } from "../typings";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: ProjectsType[];
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
      className="flex flex-col relative h-[100dvh] text-left md:text-left  max-w-full px-2 md:px-10 gap-4 justify-center mx-auto items-center overflow-hidden "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="container w-full flex space-x-1 overflow-x-scroll p-1 md:p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

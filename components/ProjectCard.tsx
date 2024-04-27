import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Projects } from "../typings";

type Props = {
  project: Projects;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-contain object-center"
        src={urlFor(project.projectImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-light">
          {project.projectName}
        </h4>
        <p className="font-bold text-lg md:text-2xl mt-1">
          {project.framework}
        </p>
        <div className="flex space-x-2 my-2">
          {project.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10  object-contain"
              src={urlFor(tech.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-sm">
          {new Date(project.dateStarted).toDateString()} -{" "}
          {new Date(project.dateEnded).toDateString()}
        </p>
        {/* <ul className="list-disc space-y-4 ml-5 text-lg">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul> */}
      </div>
    </article>
  );
};

export default ProjectCard;

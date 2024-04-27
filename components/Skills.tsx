import { motion } from "framer-motion";
import { Skill as SkillsTypes } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillsTypes[];
};

const Skills = ({ skills }: Props) => {
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
      viewport={{
        once: true,
      }}
      className="flex flex-col relative h-screen text-center md:text-left gap-4 max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className=" uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className=" md:grid md:grid-cols-5 gap-5 px-4 container flex overflow-auto items-center snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

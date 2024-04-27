import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="bg-[#292929] p-5 rounded-md hover:bg-[#4e4e4e] md:transition flex items-center justify-center flex-col flex-shrink-0 h-max mb-4">
      <Image
        src={urlFor(skill.image).url()}
        className="object-contain w-24 h-24 md:w-28 md:h-28"
        height={96}
        width={96}
        alt={skill.title}
      />
      <p className="uppercase pt-5 text-gray-300 text-sm text-center font-bold">
        {skill.title}
      </p>
    </div>
  );
};

export default Skill;

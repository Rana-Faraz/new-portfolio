import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center relative h-[100dvh] gap-8 md:gap-20">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
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
        className=" flex flex-col md:flex-row text-center md:text-left max-w-7xl px-10 justify-center gap-4 mx-auto items-center"
      >
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="hidden md:block"
        >
          <Image
            className="rounded-full object-cover mx-auto -mb-20 md:mb-0 flex-shrink-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            src={urlFor(pageInfo.profilePic).url()}
            alt="Picture of the author"
            height={500}
            width={500}
            quality="100"
          />
        </motion.div>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="block md:hidden h-24 w-24  mx-auto md:mx-0 md:mt-0 md:h-64 md:w-64 xl:w-[500px] xl:h-[600px]"
        >
          <img
            className="rounded-full object-cover h-full w-full"
            src={urlFor(pageInfo.profilePic).url()}
            alt="Picture of the author"
            height={"100%"}
            width={"100%"}
          />
        </motion.div>
        <div className=" px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p className="text-base">{pageInfo.backgroundInformation}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

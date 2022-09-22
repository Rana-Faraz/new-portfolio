import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const info = `I'm a self-taught developer with a passion for learning new technologies and building things that help people. I have been working as a React Native Developer for 1 year on various projects. My expertise are in mobile apps and building responsive web applications. I also build robust backends and API endpoints, which are scalable and optimized to your needs.`;
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
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

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
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;

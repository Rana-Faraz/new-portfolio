import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* Social Icons */}
      <div>
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
        {/* <SocialIcon
          url="https://facebook.com/f4zyt"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/f4zyt"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/f4zyt"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </div>
      <Link href="#contact">
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </div>
      </Link>
    </header>
  );
}

export default Header;

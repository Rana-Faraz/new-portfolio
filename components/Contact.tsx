import { AtSymbolIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = ({ pageInfo }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rfaraz51@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="flex flex-col relative h-screen items-center justify-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className=" flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center py-10">
        <div className="flex flex-col md:space-y-10 gap-4">
          <h4 className="md:text-4xl font-semibold text-center text-xl">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              Lets Talk.
            </span>
          </h4>
          <div className="flex gap-4 items-center justify-center">
            <a
              href="tel:+923464626166"
              className="flex items-center space-x-5 justify-center bg-[#4e4e4e] p-4 rounded-md"
            >
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="hidden md:block">{pageInfo.phoneNumber}</p>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/Lahore,+Punjab/@31.4829403,74.3343893,11z/data=!3m1!4b1!4m6!3m5!1s0x39190483e58107d9:0xc23abe6ccc7e2462!8m2!3d31.5203696!4d74.3587473!16zL20vMHhudDU?entry=ttu"
              className="flex items-center space-x-5 justify-center bg-[#4e4e4e] p-4 rounded-md"
            >
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="hidden md:block">{pageInfo.address}</p>
            </a>
            <a
              href="mailto:rfaraz51@gmail.com"
              className="flex items-center space-x-5 justify-center bg-[#4e4e4e] p-4 rounded-md"
            >
              <AtSymbolIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="hidden md:block">{pageInfo.email}</p>
            </a>
          </div>

          <form
            className="flex flex-col space-y-2 w-fit mx-auto "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="md:flex space-x-2 hidden ">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="name"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput block w-full md:hidden"
              type="name"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput block w-full md:none"
              type="email"
            />

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />

            <button
              type="submit"
              className="bg-[#f7ab0a] py-2 px-4 md:py-5 md:px-10 rounded-md text-black font-bold md:text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

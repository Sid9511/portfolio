import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
  return (
    <div className="pb-20 pt-10 lg:pt-14 md:pt-12" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 absolute top-0 left-0 bg-neutral-950 flex flex-col items-center justify-center antialiased">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        <BackgroundBeams />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[70vw] lg:max-w-[61vw] md:max-w-2xl flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
            Enhancing web with dynamic development
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center my-3 text-[40px] text-[43px] md:text-5xl lg:text-[55px]"
          />

          <p className="text-center mb-5 lg:mb-1 md:mb-1  md:tracking-wider text-sm md:text-lg lg:text-[19px]">
            Hi! I&apos;m Siddhant, a Frontend Developer building sleek and efficient websites
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (

    <div className="py-10 mb-10" id="projects">
      <h1 className="heading">
        Recent{" "}
        <span className="text-purple">Projects</span>
      </h1>
      
      <div className="flex flex-wrap items-center justify-center p-6 gap-32 mt-8">
        {projects.map((item) => (
          <div
            className="lg:min-h-[35rem] h-[30rem] flex items-center justify-center w-[22rem] "
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center lg:w-[22rem] w-[20rem] overflow-hidden h-[60vh] mb-8 ">
                <div
                  className="absolute w-full h-[18rem] top-0 overflow-hidden rounded-3xl"
                  style={{ backgroundColor: "#13162D",}}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute top-2 h-[16rem] overflow-hidden rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 mt-[-4rem] mb-4">
                {item.title}
              </h1>

              <p
                className="text-2sm font-normal font-light text-sm h-16"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-9 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-sm text-xs text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

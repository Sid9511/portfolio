
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useState } from "react";
import { IoCopyOutline, IoDownloadOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";


const Footer = () => {

  const [downloaded, setDownloaded] = useState(false);


  const handleDownload = () => {
    const resumeUrl = "/Siddhant Deshmukh Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/Siddhant Deshmukh Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 5000);
  };
  


  return (
    <footer className="w-full h-full pt-20 pb-10 lg:mb-10 mb-5 " id="contact" >
  
      <div className="w-full absolute left-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="hidden lg:block md:block w-full h-full opacity-90 relative z-0 lg:-translate-y-55 "
        />
      </div>


      <div className="flex flex-col items-center">
        <h1 className="heading max-w-[90vw] lg:max-w-[60vw]" style={{ lineHeight: '1.5' }}>
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-white-200 my-10 text-center max-w-[75vw]">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

          <div className="flex gap-10 ">
            <MagicButton
              title={downloaded ? "Resume Downloaded!" : "Download my Resume"}
              icon={<IoDownloadOutline />}
              position="left"
              handleClick={handleDownload}
              otherClasses="!bg-[#161A31]"
            />
          </div>  
      </div>
      
      <div className="flex mt-14 md:flex-row flex-col justify-between items-center">
        <p className="text-sm md:font-normal font-light mb-8 lg:mb-0 md:mb-0">
          Copyright © 2024 Siddhant Deshmukh
        </p>

        <div className="flex items-center gap-6 lg:mr-10">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-[3rem] h-[3rem] flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-[#1e202b] hover:text-white transition duration-200"
            >
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                <img src={info.img} alt="icons" width={22} height={22} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

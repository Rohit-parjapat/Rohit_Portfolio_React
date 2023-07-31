import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../CSS/aboutSection.css";

const MyInfo = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="">
        <div className="container flex flex-col gap-2 justify-center items-center py-5 font_family">
          <h4 className="lg:text-md text-sm text-blue-600 leading-3 tracking-widest font-medium p-1">
            ABOUT ME
          </h4>
          <span className="lg:text-4xl text-2xl font-bold uppercase tracking-widest p-1">
            Welcome to my website
          </span>
        </div>
        <div className="px-4 flex  w-full" data-aos="fade-up">
          <p className="lg:leading-8 leading-6 lg:text-lg text-md font-family font-normal tracking-wider text-justify my-2 px-5 rounded-md">
            Graduated in Bachelor of Computer Application stream. I have
            completed my Full Stack Web development Internship from Devtown. I
            am a NCC (National cadet corps) cadet on Under Officer rank. I am
            hardworking and I would like to acquire new skills and always
            passionate to learn new technologies. I can work with HTML5, CSS 3,
            JavaScript, PHP, MySQL, NodeJS, ReactJS and have knowledge of
            MongoDB. My current goal is to become a Full Stack Web Developer and
            I'm working on it. Two Pillars for my learning path are bugs and
            problem-solving skills. For me, the advancement of technology not
            only seeks my attention but gives me an abundant amount of knowledge
            to explore other fields also. I am always ready to give my 100%.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyInfo;

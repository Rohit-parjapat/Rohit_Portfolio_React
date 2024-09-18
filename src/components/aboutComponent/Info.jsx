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
          <span className="lg:text-4xl text-2xl font-bold uppercase tracking-widest p-1">
            Welcome to my Portfolio
          </span>
          <h4 className="lg:text-md text-sm text-blue-600 leading-3 tracking-widest font-medium p-1">
            ABOUT ME
          </h4>
        </div>
        <div className="px-4 flex  w-full" data-aos="fade-up">
          <p className="lg:leading-8 leading-6 lg:text-lg text-md font-family font-normal tracking-wider text-justify my-2 px-5 rounded-md">
            I am currently pursuing a Master of Business Administration (MBA)
            with a specialization in Information Technology from Maharshi
            Dayanand University. I hold a Bachelor’s degree in Computer
            Applications from Gurugram University and have also completed a Full
            Stack Web Development course in the MERN stack, with additional
            knowledge in DevOps. With hands-on experience in creating dynamic
            and responsive websites, I possess a strong understanding of
            front-end and back-end development. My expertise spans technologies
            like MongoDB, Express.js, React.js, and Node.js, allowing me to
            build efficient, scalable web applications. I am always eager to
            learn and explore the latest technologies, continually enhancing my
            skills to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyInfo;

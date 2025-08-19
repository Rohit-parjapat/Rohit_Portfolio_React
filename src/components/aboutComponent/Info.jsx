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
            Backend Developer with 1+ years of experience in building scalable web applications using Node.js,
            Express.js, and MongoDB. Skilled in designing RESTful APIs, implementing secure authentication, and
            integrating third-party services. Proven track record of improving performance (reduced issues by 75%) and
            enhancing user engagement (boosted retention by 50%). Experienced with Git, Docker, and cloud deployment.
            Actively seeking a backend-focused SDE role to architect and deliver reliable, high-performance systems.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyInfo;

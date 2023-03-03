import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../CSS/services.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="flex flex-col gap-3 justify-center About_bg ">
        <div className="mx-auto py-3 flex flex-col">
          <h1 className="section_heading">My Services</h1>
          <h1 className="section_sub_heading">What i do</h1>
        </div>
        <div className="md:flex gap-3 lg:justify-between px-10 py-5 w-full">
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">
              Full Stack Web Developer
            </h3>
            <p className="service_sub_div_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              laboriosam obcaecati facere alias, cumque non iure delectus at
              soluta! Doloribus aspernatur natus soluta, numquam aut saepe
              exercitationem iusto nisi!
            </p>
          </div>
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">FrontEnd Developer</h3>
            <p className="service_sub_div_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              laboriosam obcaecati facere alias, cumque non iure delectus at
              soluta! Doloribus aspernatur natus soluta, numquam aut saepe
              exercitationem iusto nisi!
            </p>
          </div>
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">BackEnd Developer</h3>
            <p className="service_sub_div_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              laboriosam obcaecati facere alias, cumque non iure delectus at
              soluta! Doloribus aspernatur natus soluta, numquam aut saepe
              exercitationem iusto nisi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

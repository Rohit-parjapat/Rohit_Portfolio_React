import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../CSS/Courses.css";

const Courses = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="flex flex-col gap-3 justify-center About_bg ">
        <div className="mx-auto py-3 flex flex-col">
          <h1 className="section_heading">My Courses</h1>
          <h1 className="section_sub_heading">What i did</h1>
        </div>
        <div className="md:flex gap-3 lg:justify-between px-10 py-5 w-full">
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">
              Full Stack Web Development
            </h3>
            <p className="service_sub_div_text">
              <small>From 10 June to 10 Nov</small>
              <div>
                Successfully completed course in Full stack web Development from
                Devtown. it was an online course with training and development.
                In this training course i make different projects which i
                described below.
              </div>
            </p>
          </div>
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">Web Development</h3>
            <p className="service_sub_div_text">
              Successfully completed course in Web development from my mentor at
              Delta it network Pvt. Ltd. I completed the course via Online mode.
              That is my first course i did. Learnt skills : HTML | CSS |
              JavaScript | jQuery | Boostrap | Php | MySql Db.
            </p>
          </div>
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">FrontEnd Development</h3>
            <p className="service_sub_div_text">
              Learnt this course from Youtube. Basicaly i did this course when i
              was working on sharpening my skills and learning different things.
              Learnt skills : HTML | CSS | JavaScript | jQuery | Boostrap | Php
              | MySql Db.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;

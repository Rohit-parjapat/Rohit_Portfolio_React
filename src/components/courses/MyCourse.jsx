import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../CSS/Courses.css";

const Courses = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section id="courses">
      <div className="flex flex-col gap-3 justify-center About_bg ">
        <div className="mx-auto py-3 flex flex-col">
          <h1 className="section_sub_heading">What i did</h1>
          <h1 className="section_heading">My Courses</h1>
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
        <div className="mx-auto py-3 flex flex-col">
          <h1 className="section_heading">Experiance</h1>
        </div>
        <div className="md:flex gap-3 lg:justify-between px-10 py-5 w-full">
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">
              Full Stack Developer | Pasenture Technologies Private Limited.
            </h3>
            <p className="service_sub_div_text">
              <small>From 5 June 2024 to 14 Sep 2024</small>
              <div>
                During my tenure as a Full Stack Developer, I worked on various
                projects utilizing the MERN (MongoDB, Express, React, Node.js)
                stack, along with additional technologies such as PHP, MySQL,
                and Twig. My role involved both front-end and back-end
                development, contributing to diverse web applications and
                enhancing user experiences across platforms.
                <br /> One of my key accomplishments was the independent
                creation of a project called Bimabook, an insurance management
                information system (MIS). This project streamlined insurance
                processes by integrating features like policy management, client
                data tracking, and reporting tools. The successful delivery of
                this project not only improved operational efficiency but also
                showcased my ability to lead and execute full lifecycle software
                development.
                <br /> Additionally, I gained extensive experience in building
                scalable APIs, handling databases, and integrating third-party
                services to optimize performance. Throughout my projects, I
                consistently prioritized code quality, collaboration, and
                meeting client requirements, making a significant impact in both
                product development and team success.
              </div>
            </p>
          </div>
          <div className="service_sub_div" data-aos="fade-up">
            <h3 className="service_sub_div_heading">
              Full Stack Web Development Intern | Devtown (Virtual){" "}
            </h3>
            <p className="service_sub_div_text">
              <small>From 10 jun 2022 to 10 Nov 2022</small>
              I have worked with During my internship and training at Devtown, I
              gained extensive hands-on experience in Full Stack Web
              Development, specializing in the MERN stack (MongoDB, Express.js,
              React.js, and Node.js). The program focused on both theoretical
              and practical learning, allowing me to work on real-world projects
              and develop dynamic web applications from scratch.
              <br /> Key Responsibilities: Built and deployed responsive web
              applications using the MERN stack.
              <br />
              Integrated RESTful APIs for efficient data handling and
              manipulation.
              <br /> Collaborated with peers in a remote environment, enhancing
              my communication and problem-solving skills.
              <br /> Gained foundational knowledge in DevOps practices, focusing
              on deployment and version control.
              <br /> This internship not only solidified my technical skills but
              also taught me how to manage web development projects effectively
              in a collaborative virtual setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

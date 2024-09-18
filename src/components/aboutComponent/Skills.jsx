import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../CSS/aboutSection.css";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section id="skills">
      <div className="py-3 px-2 flex flex-col gap-2 justify-center items-center ">
        <div>
          <h1 className="font_family text-5xl uppercase tracking-wider py-2">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">HTML 5</span>
            <div className="html_progress_bar ">
              <span className="html_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">CSS</span>
            <div className="html_progress_bar ">
              <span className="CSS_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">JAVASCRIPT</span>
            <div className="html_progress_bar ">
              <span className="JAVASCRIPT_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">JQUERY</span>
            <div className="html_progress_bar ">
              <span className="JQUERY_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">BOOTSTRAP</span>
            <div className="html_progress_bar ">
              <span className="BOOTSTRAP_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">TAILWIND</span>
            <div className="html_progress_bar ">
              <span className="TAILWIND_progress "></span>
            </div>
          </div>
          <div className="skill_box " data-aos="fade-up">
            <span className="skill_title">REACTJS</span>
            <div className="html_progress_bar ">
              <span className="REACTJS_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">NODEJS</span>
            <div className="html_progress_bar ">
              <span className="NODEJS_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">EXPRESSJS</span>
            <div className="html_progress_bar ">
              <span className="EXPRESSJS_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">REDUX</span>
            <div className="html_progress_bar ">
              <span className="REDUX_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">MONGODB</span>
            <div className="html_progress_bar ">
              <span className="MONGODB_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">MONGOOSE</span>
            <div className="html_progress_bar ">
              <span className="MONGOOSE_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">PHP</span>
            <div className="html_progress_bar ">
              <span className="PHP_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">MYSQL</span>
            <div className="html_progress_bar ">
              <span className="MYSQL_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">AWS(EC2)</span>
            <div className="html_progress_bar ">
              <span className="AWS_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">GIT/GITHUB/GITLAB</span>
            <div className="html_progress_bar ">
              <span className="GITHUB_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">TypeScript</span>
            <div className="html_progress_bar ">
              <span className="GITHUB_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">GraphQl</span>
            <div className="html_progress_bar ">
              <span className="GITHUB_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">POSTMAN</span>
            <div className="html_progress_bar ">
              <span className="POSTMAN_progress "></span>
            </div>
          </div>
          <div className="skill_box" data-aos="fade-up">
            <span className="skill_title">DEVOPS</span>
            <div className="html_progress_bar ">
              <span className="DEVOPS_progress "></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

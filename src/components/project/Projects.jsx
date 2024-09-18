import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../CSS/project.css";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section id="projects">
      <div className="body">
        <div className="mx-auto flex flex-col pt-12">
          <h1 className="section_heading">Work</h1>
          <span className="section_sub_heading m-auto">Projects</span>
        </div>
        <div className="timeline ">
          <div className="container_box left_container" data-aos="fade-up">
            <img src="/images/rlogo.jpg" alt="logo" />
            <div className="text_box">
              <h2>BimaBook Lite </h2>
              <small>5 jun, 2024 - 30 jun, 2024</small>
              <div>
                <h3>Tech Stack:</h3>
                <p>
                  ReactJs | Redux | FontAwesome | NodeJs | ExpressJs | Mongoose
                  | MongoDb | Bootstrap CSS | Postman
                </p>
              </div>
              <div>
                <h3>Aria of Responsibility:</h3>
                <ul>
                  <li>
                    Developed user-friendly interfaces for policy management.
                  </li>
                  <li>Integrated API for real-time data updates</li>
                </ul>
              </div>
              <span className="left_container_arrow"></span>
            </div>
          </div>
          <div className="container_box right_container" data-aos="fade-up">
            <img src="/images/rlogo.jpg" alt="logo" />
            <div className="text_box">
              <h2>Zomato Clone </h2>
              <small>2022 - 2023</small>
              <div>
                <h3>Tech Stack:</h3>
                <p>
                  ReactJs | Redux | FontAwesome | NodeJs | ExpressJs | Mongoose
                  | MongoDb | Tailwind CSS | Postman | AWS(EC2)
                </p>
              </div>
              <div>
                <h3>Features:</h3>
                <p>
                  Fixed Navbar | Log-In | Sign-up | Cart | Menus preview |
                  Checkout & Payment | Media Query for All
                </p>
              </div>
              <div>
                <h3>Aria of Responsibility:</h3>
                <ul>
                  <li>Applied JWT-based User Authentication</li>
                  <li>Build complete Cart functionality.</li>
                  <li>
                    A collaborative project Developed with a mentor within 20
                    days.
                  </li>
                </ul>
              </div>
              <span className="right_container_arrow"></span>
            </div>
          </div>
          <div className="container_box left_container" data-aos="fade-up">
            <img src="/images/rlogo.jpg" alt="logo" />
            <div className="text_box">
              <h2>BookMyShow Clone</h2>
              <small>2022 - 2023</small>
              <div>
                <h3>Tech Stack:</h3>
                <p>
                  ge. Tech Stack: ReactJs | Javascript | CSS 3 | Tailwind CSS |
                  Bootstrap | FontAwesome | Nodejs | Expressjs | Mongoose |
                  GitHub | MovieDb API
                </p>
              </div>
              <div>
                <h3>Features:</h3>
                <p>Payment & Checkout Section | Movie page | Play page.</p>
              </div>
              <div>
                <h3>Aria of Responsibility:</h3>
                <ul>
                  <li>Working with API's</li>
                  <li>Build payment gateway</li>
                  <li>
                    A collaborative project Developed with a mentor within 20
                    days.
                  </li>
                </ul>
              </div>
              <span className="left_container_arrow"></span>
            </div>
          </div>
          <div className="container_box right_container" data-aos="fade-up">
            <img src="/images/rlogo.jpg" alt="logo" />
            <div className="text_box">
              <h2>Book Management server</h2>
              <small>2022 - 2023</small>
              <div>
                <h3>Tech Stack:</h3>
                <p>NodeJs | ExpressJs | Mongoose | MongoDb | Postman</p>
              </div>
              <div>
                <h3>Features:</h3>
                <p>Routing | Add Data | Get Data | Delete Data</p>
              </div>
              <div>
                <h3>Aria of Responsibility:</h3>
                <ul>
                  <li>Build complete Cart functionality.</li>
                  <li>
                    A collaborative project Developed with a mentor within 20
                    days.
                  </li>
                </ul>
              </div>
              <span className="right_container_arrow"></span>
            </div>
          </div>
          <div className="container_box left_container" data-aos="fade-up">
            <img src="/images/rlogo.jpg" alt="logo" />
            <div className="text_box">
              <h2>Task Management</h2>
              <small>2022 - 2023</small>
              <div>
                <h3>Tech Stack:</h3>
                <p>HTML | CSS | JavaScript</p>
              </div>
              <div>
                <h3>Features:</h3>
                <p>
                  Fixed Navbar | Task adding functionality | Task preview | Task
                  editing | Use of Browser Local storage | Media Query for All
                </p>
              </div>
              <div>
                <h3>Aria of Responsibility:</h3>
                <ul>
                  <li>Efficient Use of Browser Local storage </li>
                  <li>Build complete tast handle functionality.</li>
                  <li>A collaborative project Developed with a mentor.</li>
                </ul>
              </div>
              <span className="left_container_arrow"></span>
            </div>
          </div>
          <div className="container_box right_container" data-aos="fade-up">
            <img src="/images/rlogo.jpg" alt="logo" />
            <div className="text_box">
              <h2>Disney Hotstar clone</h2>
              <small>2022 - 2023</small>
              <div>
                <h3>Tech Stack:</h3>
                <p>HTML | CSS | JavaScript | Bootstrap</p>
              </div>
              <div>
                <h3>Features:</h3>
                <p>
                  Fixed Navbar | Hoverable bars | Used carousals | Media Query
                  for All
                </p>
              </div>
              <div>
                <h3>Aria of Responsibility:</h3>
                <ul>
                  <li>Build complete Home page.</li>
                  <li>
                    A collaborative project Developed with a mentor within a
                    week.
                  </li>
                </ul>
              </div>
              <span className="right_container_arrow"></span>
            </div>
          </div>
          <div className="container_box left_container" data-aos="fade-up">
            <img src="/images/rlogo.jpg" alt="logo" />
            <div className="text_box">
              <h2>Zomato-Landing-page clone</h2>
              <small>2022 - 2023</small>
              <div>
                <h3>Tech Stack:</h3>
                <p>HTML | CSS | JavaScript | Bootstrap</p>
              </div>
              <div>
                <h3>Features:</h3>
                <p>
                  Fixed Navbar | Hoverable bars | Used carousals | Media Query
                  for All
                </p>
              </div>
              <div>
                <h3>Aria of Responsibility:</h3>
                <ul>
                  <li>Build complete Home page.</li>
                  <li>
                    A collaborative project Developed with a mentor within a
                    week.
                  </li>
                </ul>
              </div>
              <span className="left_container_arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

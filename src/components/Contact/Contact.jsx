import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../CSS/contact.css";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_omlzv6u",
        "template_vlggtae",
        form.current,
        "TMcxMG7BPYHEAs29n"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Message Sent");
          var form = document.querySelector("#contact-form");
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="flex flex-col gap-3 contact_bg py-4">
        <div className="mx-auto  flex flex-col pt-12">
          <h1 className="section_heading">Find Me</h1>
          <span className="section_sub_heading">Contact me</span>
        </div>
        <form ref={form} id="contact-form" onSubmit={sendEmail}>
          <div className="md:flex gap-4 mx-auto md:px-32 px-5 py-5 w-full">
            <div className="flex flex-col gap-4 md:w-1/2" data-aos="fade-up">
              <input
                type="text"
                name="client_name"
                id="name"
                placeholder="Enter Your Name"
                required
                className="inputs_design"
              />
              <input
                type="text"
                name="client_email"
                id="email"
                placeholder="Enter Your Email"
                required
                className="inputs_design"
              />
              <input
                type="number"
                name="client_mobile"
                id="mNumber"
                placeholder="Enter Your Mobile Number"
                required
                className="inputs_design"
              />
            </div>
            <div className="md:w-1/2" data-aos="fade-up">
              <textarea
                name="message"
                placeholder="Start Typing..."
                className="inputs_design textarea_design"
              ></textarea>
            </div>
          </div>
          <div className="mx-auto" data-aos="fade-up">
            <input
              className="submit_button mt-4 hover:bg-yellow-500"
              type="submit"
              value="Send"
            />
          </div>
        </form>
        <div className="md:flex lg:justify-center items-center gap-3 px-16 py-4 w-full">
          <div className="contact_box md:w-1/3 py-2" data-aos="fade-up">
            <span className="text-yellow-500 text-3xl">
              <FaAddressCard />
            </span>
            <h1 className="contact_data">Address</h1>
            <span className="contact_data">
              Saraswati Enclave - I, Sector-10B, Gurugram, Haryana-122001
            </span>
          </div>
          <div className="contact_box md:w-1/3 py-2" data-aos="fade-up">
            <span className="text-yellow-500 text-3xl">
              <MdEmail />
            </span>
            <h1 className="contact_data">Email</h1>
            <span className="contact_data">thetechsources@gmail.com</span>
          </div>
          <div className="contact_box md:w-1/3 py-2" data-aos="fade-up">
            <span className="text-yellow-500 text-3xl">
              <GiSmartphone />
            </span>
            <h1 className="contact_data">Phone</h1>
            <span className="contact_data">9953910791</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

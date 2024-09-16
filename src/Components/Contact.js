import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Button from "./Button";

function Contact() {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const aemail = "service_njj3ftp";
    const bemail = "template_1wt8hnq";
    const cemail = "70clMlSY3duO3D23v";
    emailjs
      .sendForm(aemail, bemail, form.current, {
        publicKey: cemail,
      })
      .then(
        () => {
          alert("SUCCESSFULLY! Message Send.");
          // Clear the form fields
          setUserName("");
          setUserEmail("");
          setMessage("");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="  w-screen max-sm:h-[80vh] h-[100vh] flex items-center text-white bg-[#070A29] justify-center"
    >
      <div className="formbox w-[80vw] max-sm:w-[100vw] ">
        <div className=" ml-10w max-sm:ml-0 max-sm:px-2 form-heading">
          <h1 className="font-rfont text-center  text-[8vh] ">Contact Us</h1>
        </div>
        <div className="form flex items-center justify-center ">
          <form
            className="flex font-semibold tracking-[2px] w-[20vw] max-sm:w-[80vw] font-mono flex-col relative"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="text-[3vh]  ">Name</label>
            <input
              className="max-h-[8vh] outline-none bg-transparent text-[#c2c2c2]  px-2 font-semibold border-b-2  border-l-2 border-[#ffffff51] mb-[2vh]  "
              type="text"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label className="text-[3vh] ">Email</label>
            <input
              className="max-h-[8vh] outline-none bg-transparent   px-2 font-semibold border-b-2 text-[#c2c2c2]  border-l-2 border-[#ffffff51]  mb-[2vh]  "
              type="email"
              name="user_email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label className="text-[3vh] mb-[2vh] ">Message</label>
            <textarea
              className="min-h-[5vh]  px-2 font-semibold resize-none text-[#c2c2c2] mb-[4vh] bg-transparent outline-none border-b-2 border-l-2 border-[#ffffff51] custom-scrollbar"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button text="Submit" width="w-[20vmax]" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

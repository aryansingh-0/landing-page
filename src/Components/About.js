import React from "react";
import Button from "./Button";
import Contact from "./Contact";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Footer from "./Footer";
import Works from "./Works";

function About() {
  return (
    <div className="flex relative flex-col">
      <div className="circle h-[55vw] w-[35vw] bg-[#2F286C] rounded-[100%] absolute  top-[25vh] blur-[90px]"></div>
      <div
        id="about"
        className="text-white  pt-[8vmin] pb-[10vmin] max-sm:block flex min-h-screen overflow-x-hidden bg-[#070A29] w-full"
      >
        <div className="rightbox flex items-center justify-center  relative w-[50vw] max-sm:w-[100vw] max-sm:h-[60vh] h-[100vh]">
          <div className="images relative w-[80%] h-[80%]">
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 2,
              }}
              whileTap={{ scale: 1.1, rotate: -2 }}
              className="image1 shadow-md rounded-lg absolute max-sm:w-[25vmax] w-[15vmax] h-[25vmin] max-sm:top-20 max-sm:z-[2] top-0 left-1 bg-cover bg-no-repeat bg-center bg-[url(https://i.pinimg.com/564x/ff/4e/49/ff4e499a7dc66f82026b0c4522326b6e.jpg)] "
            ></motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 2,
              }}
              whileTap={{ scale: 1.1, rotate: -2 }}
              className="image2 max-sm:w-[30vmax]  max-sm:h-[30vmin] rounded-lg absolute w-[10vmax] h-[15vmin] bottom-[6vh] left-[6vw] shadow-sm bg-cover bg-no-repeat bg-center bg-[url(https://i.pinimg.com/564x/68/9d/7c/689d7c3981d82a849c02242a45f0f58f.jpg)] "
            ></motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 2,
              }}
              whileTap={{ scale: 1.1, rotate: -2 }}
              className="bigimage max-sm:w-[40vmax] max-sm:h-[30vmax]  max-sm:left-[14vw] rounded-lg absolute w-[30vmax] h-[55vmin] max-sm:bottom-[25vh] bottom-[16vh] left-[9vw] shadow-xl bg-cover bg-no-repeat bg-center bg-[url(https://i.pinimg.com/564x/99/fc/0c/99fc0cc40d78c0b0f4af3685369409cb.jpg)] "
            ></motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                z: 100,
                rotate: 2,
              }}
              whileTap={{ scale: 1.1, rotate: -2 }}
              className="smalerimg shadow-sm rounded-lg absolute  w-[20vmax] h-[30vmin] bottom-2 right-0 bg-cover bg-no-repeat bg-center bg-[url(https://i.pinimg.com/564x/53/e2/9d/53e29d7392678c362b106c4f34157d95.jpg)] "
            ></motion.div>
          </div>
        </div>
        <div className="leftbox flex items-center  relative max-sm:w-[100vw] w-[50vw] h-[100vh] max-sm:h-[70vh] ">
          <div className="boxofleftbox max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-[100vw] w-[40vw] h-[50vh] ">
            <div className="px-2 w-[5vw]  border-1 max-sm:text-[3.5vh] text-[1.3vmax] h-[5vh] rounded-lg  border-white text-center bg-[#161d60] font-mono text-white ">
              <h2>About</h2>
            </div>
            <div className="text mt-[4.5vh] max-sm:px-[3vw] font-mono ">
              <h1 className=" text-[2.5vmax] max-sm:text-[5vh] max-sm:leading-[8vw] capitalize leading-[4.5vmin] font-rfont">
                High quality <br />
                website builder.
              </h1>
              <p className=" tracking-tighter mt-[3.5vh]  max-sm:leading-[4vw]  leading-[3vmin] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quae?Lorem ipkjsdf sdkfs kir kdf or sit. Lorem ipsum dolor sit
                amet.
              </p>
              <p className="tracking-tighter mt-[3.5vh] max-sm:leading-[4vw] leading-[3vmin]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                odit tempora autem accusantium delectus minus magni repudiandae
                blanditiis explicabo ipsa! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Odit, doloremque?
              </p>
            </div>
            <div className="btn mt-[3.5vh]">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={600}
              >
                <Button text="More About Us" width="w-[20vmax]"></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="circle h-[30vw] w-[30vw] bg-[#2F286C] rounded-[100%] absolute right-0 top-[140vh] blur-[90px]"></div>

      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default About;

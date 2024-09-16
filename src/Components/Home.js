import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";

function Home() {
  const myRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const node = myRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isHovered]);

  return (
    <>
      <div
        ref={myRef}
        id="home"
        className="text-white relative flex h-screen max-sm:h-[90vh] overflow-x-hidden bg-[#070A29] w-full"
      >
        <div className="circle bg-[#2F286C] rounded-[100%] absolute blur-[90px]" />
        <div className="left max-sm:flex max-sm:items-center max-sm:flex-col max-sm:w-screen relative pt-[25vh] max-sm:pl-[1vw] max-sm:pt-[30vw]  pl-[5vw] max-sm:h-[90vh] w-[50vw]">
          <div className="heading">
            <h1 className="font-rfont z-[2] relative  leading-[7vmin] capitalize max-sm:text-[9vw] max-sm:text-center max-sm:text-[#f1d4ff] max-sm:font-extrabold  max-sm:leading-[7vmin]  text-[5vw]">
              collect next <br /> generation <br /> today
            </h1>
          </div>
          <div className="para max-sm:text-center pt-[5vh] max-sm:w-[70vw]  w-[30vw] max-sm:text-wrap text-wrap font-mono tracking-tighter">
            <p>
              cytonii is the premier marketplace for items you truly own for
              yourself.
            </p>
          </div>
          <div className="button w-[20vmax]  max-sm:pt-[10vw] pt-[5vmin]">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={600}
            >
              <Button text="Get connected" width="w-[20vmax]"></Button>
            </Link>
          </div>
          <div className="small max-sm:w-screen  relative max-sm:h-[10vh] mt-[20vh]">
            <h4 className="font-mono max-sm:absolute max-sm:bottom-0 max-sm:right-0  text-[2vh]">
              We are Web Developers.
            </h4>
            <motion.div
              animate={{
                x: position.x - 485,
                y: position.y - 475,
              }}
              transition={{ type: "spring", stiffness: 100, duration: 3 }}
              className="circle max-md:hidden absolute bg-white rounded-full w-[35px] h-[35px] top-[5vh] z-10 right-[10vw]  bg-gradient-to-r from-[#672787] to-[#851D6B]"
            ></motion.div>
          </div>
        </div>
        <div className="right max-sm:hidden pt-[25vh] relative flex items-center flex-col h-screen w-[50vw]">
          <div className="image w-[25vw] h-14 relative">
            <div className="w-[300px] absolute top-0 right-0 h-[65vmin] bg-[#353850] rounded-[38px] -rotate-[25deg]"></div>
            <div className="w-[300px] absolute top-0 right-0 h-[65vmin] rounded-[38px] bg-[#383266] -rotate-12"></div>
            <div className="w-[300px] bg-cover bg-no-repeat absolute top-0 right-0 h-[65vmin] shadow-lg bg-[url(https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=900&t=st=1726072704~exp=1726073304~hmac=ebbc7eae4a88d4db1f1e5621ff2bd88f339c24792aa831d8aac057de143aa2f2)] bg-center rounded-[38px]"></div>
          </div>
          <div className="sticker relative w-[15vw] mt-7 h-[10vh]">
            <div className="w-[200px] absolute bg-white h-[10vh] top-0 -right-[14vw] rounded-lg flex items-center">
              <div className="h-[8vh] w-[8vh] ml-2 rounded-full shadow-inner bg-orange-100"></div>
              <div className="box ml-2 text-black font-mono flex flex-col">
                <h1 className="capitalize text-[18px] font-bold">developers</h1>
                <p className="capitalize text-[12px] -mt-2">more aesthetic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

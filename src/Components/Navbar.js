import { motion } from "framer-motion";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Button from "./Button";

function Navbar() {
  const [opennav, setopennav] = useState(false);

  function navshow() {
    setopennav(true);
  }
  function navhide() {
    setopennav(false);
  }

  return (
    <nav className="drop-shadow-lg backdrop-blur-md text-white px-[2vw] z-10 fixed top-0 right-0 w-screen h-[10vh] flex items-center justify-between">
      <div className="logo min-w-[10vw] flex items-center justify-center h-[10vh]">
        <h1 className="pl-2 font-rfont text-[3vh]">Aryan</h1>
      </div>

      <div className="navigation flex max-sm:hidden justify-between items-center h-[10vh] capitalize font-mono text-[20px] w-[35vw]">
        {["home", "about", "explore", "contact"].map((item, index) => (
          <Link
            activeClass="active"
            to={`${item}`}
            spy={true}
            smooth={true}
            key={index}
            duration={600}
          >
            <span
              key={index}
              className="hover:text-[#7343FE] duration-100 cursor-pointer"
            >
              {item}
            </span>
          </Link>
        ))}
      </div>
      <div className="pr-5 hidden max-sm:block  " onClick={navshow}>
        <GiHamburgerMenu fontSize="1.5em" />
      </div>
      <div className="button max-md:hidden h-[10vh] flex items-center justify-center w-[15vw]">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={600}
        >
          <Button width="w-[10vw]" text="join now"></Button>
        </Link>
      </div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: opennav ? 0 : "100vw" }}
        transition={{ type: "linear", stiffness: 100 }}
        className="mobile pt-10 justify-between items-center hidden h-[100vh] capitalize font-mono max-sm:block z-20 text-[20px] bg-[#1b1b4fe0] absolute top-0 -right-[1vw] w-[102vw]"
      >
        <div className="icon absolute top-[12.5px] right-[35px] z-20 font-rfont">
          <span onClick={navhide} className="text-white text-[3vh]">
            X
          </span>
        </div>
        {["home", "about", "explore", "contact"].map((item, index) => (
          <Link
            key={index}
            activeClass="active"
            to={`${item}`}
            spy={true}
            smooth={true}
            duration={600}
          >
            <p
              onClick={navhide}
              key={index}
              className="pb-3 hover:text-[#7343FE] duration-100 text-center cursor-pointer"
            >
              {item}
            </p>
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}

export default Navbar;

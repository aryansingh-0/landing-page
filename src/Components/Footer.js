import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="w-screen border-t-[1px] border-[#ffffff5a] h-[15vmin] flex items-center max-sm:px-3 px-[25vw] justify-evenly max-sm:justify-between text-white bg-[#070A29]">
      <div className="logo font-rfont">
        <h3 className="text-[2vmax]">Aryan</h3>
      </div>
      <div className="2ndpart">
        <div className="navigation flex justify-between items-center capitalize font-mono text-[20px] max-sm:w-[60vw] max-sm:text-[15px] w-[25vw]">
          {["home", "about", "explore", "contact"].map((item, index) => (
            <Link
              key={index}
              activeClass="active"
              to={item}
              spy={true}
              smooth={true}
              duration={600}
            >
              <span
                className="cursor-pointer hover:text-[#7343FE] duration-100"
                href="/"
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <p className="text-[1.7vmin] text-[#686868] text-center w-[100%]">
            copyright is reserved to the company
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

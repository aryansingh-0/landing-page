import { motion } from "framer-motion";
import React from "react";
function Cards({ imageurl, cardtext }) {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
      className="w-[15rem] bg-[#121533] h-[19rem] flex items-center justify-center flex-shrink-0 rounded-3xl "
    >
      <div className=" w-[90%] relative h-[90%] bg-black rounded-3xl  overflow-hidden">
        <img
          className=" h-full w-full object-cover "
          src={`${imageurl}`}
          alt=""
        />
        <div className="text absolute bottom-4 h-10 w-full flex items-center justify-center ">
          <div className="w-[95%] h-[95%] rounded-lg bg-[#ffffff1d]  overflow-hidden backdrop-blur-sm flex items-center justify-center font-mono font-bold capitalize ">
            <h2>{cardtext}</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;

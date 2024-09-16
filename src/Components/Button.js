import { motion } from "framer-motion";
import React from "react";

function Button(props) {
  return (
    <motion.div whileTap={{ scale: 0.9, rotate: 3 }}>
      <button
        className={`${props.width} capitalize  rounded-lg h-[5vh] font-mono flex items-center justify-center bg-gradient-to-r from-[#6A38FE] to-[#B190FF]`}
      >
        {props.text}
      </button>
    </motion.div>
  );
}

export default Button;

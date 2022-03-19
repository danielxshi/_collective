import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      transition={{
        duration: AnimationConfig.VERY_FAST,
        ease: AnimationConfig.EASING,
      }}
      initial={{
        backgroundColor: "rgba(255,255,255,.0)",
      }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,1)",
        color: "#000",
      }}
      className="font-mono font-medium text-small leading-none rounded-full px-6 py-4 border-solid border border-gray-full"
    >
      {children}
    </motion.button>
  );
};

export default Button;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

const ArrowRightIcon = ({ isHovering }) => (
  <div className="w-[1em] h-[1em] overflow-hidden">
    <motion.div
      className="flex flex-row"
      transition={{
        duration: AnimationConfig.NORMAL,
        ease: AnimationConfig.EASING,
      }}
      initial={{ x: "-1em" }}
      animate={{ x: isHovering ? "0em" : "-1em" }}
    >
      <motion.img
        transition={{
          duration: AnimationConfig.NORMAL,
          ease: AnimationConfig.EASING,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        className="h-[1em]"
        src="icon-arrow-forward.svg"
      />
      <motion.img
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovering ? 0 : 1 }}
        transition={{
          duration: AnimationConfig.NORMAL,
          ease: AnimationConfig.EASING,
        }}
        className="h-[1em]"
        src="icon-arrow-forward.svg"
      />
    </motion.div>
  </div>
);

function LinkListItem({ id, name, description }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.a
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      transition={{
        duration: AnimationConfig.FAST,
        ease: AnimationConfig.EASING,
      }}
      initial={{ opacity: 0.56 }}
      animate={{ opacity: isHovering ? 1 : 0.65 }}
      href="#"
      className="grid grid-cols-[2fr_8fr_1fr] md:grid-cols-[1fr_2fr_1fr] text-medium py-[1.2em] font-serif border-t border-[rgba(255,255,255,.17)] "
    >
      <div className="font-mono font-light">{id}</div>
      <div className="">
        <div className="">{name}</div>
        <div className="font-mono text-tiny mt-[.5em]">{description}</div>
      </div>
      <div className="ml-auto my-auto text-[1.2em]">
        <ArrowRightIcon isHovering={isHovering} />
      </div>
    </motion.a>
  );
}

export default LinkListItem;

import React from "react";

const Button = ({ children }) => {
  return (
    <motion.button className="font-mono font-medium text-small leading-none rounded-full px-6 py-4 border-solid border border-gray-full">
      {children}
    </motion.button>
  );
};

export default Button;

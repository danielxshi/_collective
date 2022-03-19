import React from "react";

function LinkListItem({ id, name, description }) {
  return (
    <a className="grid grid-cols-[2fr_8fr_1fr] md:grid-cols-[1fr_2fr_1fr] text-medium py-[1.2em] font-serif border-t border-[rgba(255,255,255,.1)] ">
      <div className="font-mono font-light">{id}</div>
      <div className="">
        <div className="">{name}</div>
        <div className="font-mono text-tiny mt-[.5em]">{description}</div>
      </div>
      <div className="">
        <img className="ml-auto h-[1em]" src="icon-arrow-forward.svg" />
      </div>
    </a>
  );
}

export default LinkListItem;

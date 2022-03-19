import React from "react";

function LinkListItem({ id, name, description }) {
  return (
    <div className="flex font-serif text-medium">
      <div className="">{id}</div>
      <div className="">{name}</div>
      <div className="">{description}</div>
    </div>
  );
}

export default LinkListItem;

import React from "react";

function LinkListItem({ id, name, description }) {
  return (
    <div className="flex font-serif text-medium">
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
}

export default LinkListItem;

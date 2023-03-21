import React from "react";

function Semester({ SemesterItems }) {
  const items = SemesterItems;
  return items.map((object) => {
    <h2>{object.titel}</h2>;
  });
}
export default Semester;

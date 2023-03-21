import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navabar from "./Navbar";

function SemesterList({ items }) {
  const navigate = useNavigate();
  return (
    <>
      <Navabar PageName={"Semester"} />
      <div>
        <div className="bg-blue-600 flex justify-end">
          <span className="text-white text-lg font-bold mr-1">{`${items.length} Items`}</span>
        </div>
      </div>
      <ul className="flex items-center flex-col">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex p-2 gap-5 m-5 bg-blue-600 w-4/5 text-3xl font-bold text-white"
            onClick={() =>
              navigate({
                pathname: "/subjects",
                search: `?semesterid=${item.id}`,
              })
            }
          >
            <div>{item.titel}</div>
            <div className="ml-auto">{item.grade}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default SemesterList;

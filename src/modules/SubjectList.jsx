import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navabar from "./Navbar";

function SubjectList({ items }) {
  const navigate = useNavigate();
  const [linkParams] = useSearchParams();
  const filteredItems = items
    .filter((item) => item.id == linkParams.get("semesterid"))
    .map((item) => {
      return item.content;
    });
  return (
    <>
      <Navabar PageName={"Fächer"} />
      <div>
        <div className="bg-blue-600 flex justify-end">
          <span className="text-white text-lg font-bold mr-1">{`${items.length} Items`}</span>
        </div>
      </div>
      <ul className="flex items-center flex-col">
        {filteredItems[0].map((content) => (
          <li
            key={content.id}
            className="flex p-2 gap-5 m-5 bg-blue-600 w-4/5 text-3xl font-bold text-white"
            onClick={() =>
              navigate({
                pathname: "/exams",
                search: `?semesterid=${linkParams.get(
                  "semesterid"
                )}&contentid=${content.id}`,
              })
            }
          >
            <div>{content.titel}</div>
            <div className="ml-auto">{content.grade}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default SubjectList;

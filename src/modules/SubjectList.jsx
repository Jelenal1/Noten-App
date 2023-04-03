import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navabar from "./Navbar";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firbase";

function SubjectList({ items }) {
  const navigate = useNavigate();
  const [linkParams] = useSearchParams();
  const SemesterIdInt = parseInt(linkParams.get("semesterid"));

  const [SubjectItems, setSubjectItems] = useState([]);

  function getSubject() {
    const q = query(
      collection(db, "Subject"),
      where("SemesterID", "==", SemesterIdInt)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setSubjectItems(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    return unsubscribe;
  }
  useEffect(() => {
    getSubject();
  }, [SubjectItems]);
  return (
    <>
      <Navabar PageName={"Fächer"} />
      <div>
        <div className="bg-blue-600 flex justify-end">
          <span className="text-white text-lg font-bold mr-1">{`${SubjectItems.length} Items`}</span>
        </div>
      </div>
      <ul className="flex items-center flex-col">
        {SubjectItems.map((content) => (
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

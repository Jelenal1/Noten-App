import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navabar from "./Navbar";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firbase";

function ExamList({ items }) {
  const navigate = useNavigate();
  const [linkParams] = useSearchParams();
  const SubjectIdInt = parseInt(linkParams.get("contentid"));

  const filteredItems = items
    .filter((item) => item.id == linkParams.get("semesterid"))
    .map((item) => {
      return item.content;
    });
  const filteredContent = filteredItems[0]
    .filter((content) => content.id == linkParams.get("contentid"))
    .map((content) => {
      return content.exams;
    });

  const [ExamItems, setExamItems] = useState([]);

  function getExam() {
    const q = query(
      collection(db, "Exam"),
      where("SubjectID", "==", SubjectIdInt)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setExamItems(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    return unsubscribe;
  }
  useEffect(() => {
    getExam();
  }, [ExamItems]);
  return (
    <>
      <Navabar PageName={"Tests"} />
      <div>
        <div className="bg-blue-600 flex justify-end">
          <span className="text-white text-lg font-bold mr-1">{`${ExamItems.length} Items`}</span>
        </div>
      </div>
      <ul className="flex items-center flex-col">
        {ExamItems.map((content) => (
          <li
            key={content.id}
            className="flex p-2 gap-5 m-5 bg-blue-600 w-4/5 text-3xl font-bold text-white"
          >
            <div>{content.titel}</div>
            <div className="ml-auto">{content.grade}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ExamList;

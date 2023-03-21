import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import ExamList from "./modules/ExamList";
import SemesterList from "./modules/SemesterList";
import Settings from "./modules/Settings";
import SubjectList from "./modules/SubjectList";

function App() {
  const items = [
    {
      id: 1,
      titel: "1Semester",
      grade: "4.5",
      content: [
        {
          id: 1,
          titel: "Mathe",
          grade: "4.0",
          exams: [{ id: 1, titel: "exam1", grade: "4.0" }],
        },
        {
          id: 2,
          titel: "Deutsch",
          grade: "5.0",
          exams: [{ id: 1, titel: "exam1", grade: "5.0" }],
        },
      ],
    },
    { id: 2, titel: "2 Semester", grade: "5.2" },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SemesterList items={items} />} />
        <Route path="/semester" element={<SemesterList items={items} />} />
        <Route path="/subjects" element={<SubjectList items={items} />} />
        <Route path="/exams" element={<ExamList items={items} />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

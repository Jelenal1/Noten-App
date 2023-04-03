import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./firbase";
import ExamList from "./modules/ExamList";
import Loggin from "./modules/Login";
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
  ];
  const [login, setLogin] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login ? <SemesterList /> : <Loggin />} />
        <Route
          path="/subjects"
          element={login ? <SubjectList items={items} /> : <Loggin />}
        />
        <Route
          path="/exams"
          element={login ? <ExamList items={items} /> : <Loggin />}
        />
        <Route path="/settings" element={login ? <Settings /> : <Loggin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import Navabar from "./modules/Navbar";
import SemesterList from "./modules/SemesterList";

function App() {
  return (
    <SemesterList items={[{ titel: "1Semester", grade: [{ math: "2.0" }] }]} />
  );
}

export default App;

import Navabar from "./Navbar";

function SemesterList({ items }) {
  return (
    <>
      <Navabar PageName={"Semester"} />
      <div>
        <div>{`${items.length} Item`}</div>
      </div>
    </>
  );
}
export default SemesterList;

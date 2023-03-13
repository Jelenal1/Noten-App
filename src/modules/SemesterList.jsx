import Navabar from "./Navbar";

function SemesterList({ items }) {
  return (
    <>
      <Navabar PageName={"Semester"} />
      <div>
        <div className="bg-blue-500 flex justify-end">
          <span className="text-white text-lg font-bold mr-1">{`${items.length} Item`}</span>
        </div>
      </div>
    </>
  );
}
export default SemesterList;

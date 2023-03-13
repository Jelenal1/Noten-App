import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";

function Navabar() {
  return (
    <>
      <div className="border-b-2 border-black h-16 p-2 flex justify-between items-center">
        <button>
          <AiOutlineMenu className="h-10 w-10" />
        </button>
        <span className="text-3xl">Semester</span>
        <button>
          <AiOutlinePlus className="w-12 h-12" />
        </button>
      </div>
    </>
  );
}

export default Navabar;

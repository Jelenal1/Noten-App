import {
  AiFillHome,
  AiFillSetting,
  AiOutlineMenu,
  AiOutlinePlus,
} from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";

function Navabar({ PageName }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="border-b-2 border-black h-16 p-2 flex justify-between items-center">
        <div>
          <button onClick={() => navigate("/settings")}>
            <AiFillSetting className="h-10 w-10" />
          </button>
          <button onClick={() => navigate("/semester")}>
            <AiFillHome className="h-10 w-10" />
          </button>
        </div>

        <span className="text-3xl">{PageName}</span>
        <button>
          <AiOutlinePlus className="w-11 h-11" />
        </button>
      </div>
    </>
  );
}

export default Navabar;

import { Divider } from "antd";
import { FaPlus } from "react-icons/fa";

const Upcoming = () => {
  return (
    <>
      <div className="w-full flex-col align-middle justify-center">
        <h2 className="font-bold text-5xl cursor-text">Upcoming</h2>
        <div className="mt-10">
          <Divider />
          <div className="flex w-40 justify-center items-center cursor-pointer mt-2 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2">
            <FaPlus color="#737373" />
            <span className="text-neutral-500 font-bold ml-2">
              Add New Task
            </span>
          </div>
          <Divider />
        </div>
      </div>
    </>
  );
};

export default Upcoming;

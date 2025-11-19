import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { FaDiagramNext } from "react-icons/fa6";
import { FaCalendarAlt, FaStickyNote, FaListOl } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <div className="w-[450px] p-6 min-h-screen bg-neutral-50">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Menu</h2>
          <UnorderedListOutlined
            size={100}
            className="cursor-pointer text-2xl"
          />
        </div>
        {/* Search */}
        <div className="w-full mt-8 flex items-center p-2 rounded-md ">
          <SearchOutlined className="text-1xl pl-1 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="text-[18px] font-bold pl-3 border-none outline-none flex-1"
          />
        </div>
        {/* Tasks */}
        <div className="w-full mt-8 ml-2">
          <h3 className="font-bold text-[16px] text-neutral-500">Tasks</h3>
          <div className="group flex items-center my-1 cursor-pointer hover:bg-neutral-200 py-1.5 transition-all duration-300 px-2 rounded-sm">
            <FaDiagramNext className="mr-2 text-neutral-500 group-hover:text-black transition-all duration-300" />
            <p className="font-bold text-neutral-500 group-hover:text-black transition-all duration-300">
              Upcoming
            </p>
          </div>
          <div className="group flex items-center my-1 cursor-pointer hover:bg-neutral-200 py-1.5 transition-all duration-300 px-2 rounded-sm">
            <FaListOl className="mr-2 text-neutral-500 group-hover:text-black transition-all duration-300" />
            <p className="font-bold text-neutral-500 group-hover:text-black transition-all duration-300">
              Today
            </p>
          </div>
          <div className="group flex items-center my-1 cursor-pointer hover:bg-neutral-200 py-1.5 transition-all duration-300 px-2 rounded-sm">
            <FaCalendarAlt className="mr-2 text-neutral-500 group-hover:text-black transition-all duration-300" />
            <p className="font-bold text-neutral-500 group-hover:text-black transition-all duration-300">
              Calendar
            </p>
          </div>
          <div className="group flex items-center my-1 cursor-pointer hover:bg-neutral-200 py-1.5 transition-all duration-300 px-2 rounded-sm">
            <FaStickyNote className="mr-2 text-neutral-500 group-hover:text-black transition-all duration-300" />
            <p className="font-bold text-neutral-500 group-hover:text-black transition-all duration-300">
              Sticky Wall
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

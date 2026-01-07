import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import TaskTab from "../TaskTab/TaskTab";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import useCateStore from "../../store/useCateStore";
// import { UnorderedListOutlined } from "@ant-design/icons";
// import { FaSignOutAlt } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import TagNavigation from "./TagNavigation/TagNavigation";

const Navigation = () => {
  const [currentTab, setCurrentTab] = useState("/");
  const [nameSearch, setNameSearch] = useState("");
  const { listCategories, getListCategory } = useCateStore();

  const handleSearchCategory = () => {
    getListCategory(nameSearch);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-[450px]">
        <div className="flex-1 p-6 bg-neutral-50">
          {/* Title */}
          <div className="flex justify-between items-center">
            <img src="../../../public/Logo.png" className="h-8" alt="Logo" />
            {/* <UnorderedListOutlined
              size={100}
              className="cursor-pointer text-[18px]"
            /> */}
          </div>

          {/* Search */}
          <div className="w-full mt-8 flex items-center p-2 rounded-2xl bg-gray-100">
            <SearchOutlined
              className="text-1xl pl-1 cursor-pointer"
              onClick={handleSearchCategory}
            />
            <input
              type="text"
              placeholder="Search lists"
              className="text-[16px] font-bold pl-3 border-none outline-none flex-1"
              onChange={(e) => setNameSearch(e.target.value)}
            />
          </div>

          {/* Tasks */}
          <div className="w-full mt-4 ml-2">
            <h3 className="font-bold text-[16px] text-black">Tasks</h3>
            <TaskTab
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              pageLink={"/"}
              state={"lists"}
              title={"Lists"}
              lengthTask={listCategories.length}
            />
          </div>

          {/*Categories - Tags*/}
          <div className="w-full mt-4 ml-2">
            <h3 className="font-bold text-[16px] text-black">Categories</h3>
            <CategoryNavigation />
            {/* <TagNavigation /> */}
          </div>
        </div>

        {/* Authen */}

        {/* 
        <div className="flex flex-col h-screen w-[450px] mt-auto bg-neutral-50">
          <div className="mt-auto p-6">
            <div className="flex items-center w-full cursor-pointer mt-2 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2">
              <IoMdSettings color="#737373" />
              <span className="text-neutral-500 font-bold ml-2">Settings</span>
            </div>
            <div className="flex items-center w-full cursor-pointer mt-2 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2">
              <FaSignOutAlt color="#737373" />
              <span className="text-neutral-500 font-bold ml-2">Sign out</span>
            </div>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default Navigation;

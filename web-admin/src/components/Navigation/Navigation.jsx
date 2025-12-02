import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import TaskTab from "../TaskTab/TaskTab";
import TagTab from "../TagTab/TagTab";
import Loader from "../../components/Loader/Loader";
import useCateStore from "../../store/useCateStore";
import { randomColor } from "../../utils/colors";

const Navigation = () => {
  const [currentTab, setCurrentTab] = useState("upcoming");
  const {
    isLoading,
    idCategory,
    setCategoryId,
    listCategories,
    getListCategory,
  } = useCateStore();

  useEffect(() => {
    getListCategory();
  }, []);

  console.log("idCategory", idCategory);

  return (
    <div className="flex flex-col h-screen w-[450px]">
      <div className="flex-1 p-6 bg-neutral-50">
        {/* Title */}
        <div className="flex justify-between items-center">
          <img src="../../../public/Logo.png" className="h-8" alt="Logo" />
          <UnorderedListOutlined
            size={100}
            className="cursor-pointer text-[18px]"
          />
        </div>

        {/* Search */}
        <div className="w-full mt-8 flex items-center p-2 rounded-md ">
          <SearchOutlined className="text-1xl pl-1 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="text-[16px] font-bold pl-3 border-none outline-none flex-1"
          />
        </div>

        {/* Tasks */}
        <div className="w-full mt-4 ml-2">
          <h3 className="font-bold text-[16px] text-black">Tasks</h3>
          <TaskTab
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            pageLink={"/upcoming"}
            state={"upcoming"}
            title={"Upcoming"}
            lengthTask={5}
          />
          <TaskTab
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            pageLink={"/today"}
            state={"today"}
            title={"Today"}
            lengthTask={10}
          />
          <TaskTab
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            pageLink={"/calendar"}
            state={"calendar"}
            title={"Calendar"}
          />
          <TaskTab
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            pageLink={"/sticky-wall"}
            state={"sticky-wall"}
            title={"Sticky Wall"}
          />
        </div>

        {/* Lists */}
        <div className="w-full mt-4 ml-2">
          <h3 className="font-bold text-[16px] text-black">Lists</h3>
          {isLoading.length > 0 ? (
            <>
              <Loader />
            </>
          ) : (
            <>
              {listCategories.map((item, _) => {
                return (
                  <div
                    key={item._id}
                    onClick={() => setCategoryId(item._id)}
                    className={`group bg-white hover:bg-neutral-200 flex items-center justify-between my-1 cursor-pointer py-2 transition-all duration-300 px-2 rounded-sm`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-2xl mr-2 ${randomColor()}`}
                      />
                      <span
                        className={`text-neutral-500 text-sm font-bold group-hover:text-black transition-all duration-300`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <div className="flex items-center w-full cursor-pointer mt-2 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2">
            <FaPlus color="#737373" />
            <span className="text-neutral-500 font-bold ml-2">
              Add New List
            </span>
          </div>

          {/* Tags */}
          <div className="w-full mt-4 ml-2">
            <h3 className="font-bold text-[16px] text-black">Tags</h3>
            <div className="flex items-center justify-baseline gap-x-3 gap-y-3 mt-4 flex-wrap">
              {/* Tag */}
              <TagTab name={"Tag 1"} />
              <TagTab name={"Tag 2"} />
              <TagTab name={"Tag 3"} />
              <TagTab name={"Tag 4"} />
              <TagTab name={"Tag 5"} />
              <div className="flex items-center w-full cursor-pointer mt-2 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2">
                <FaPlus color="#737373" />
                <span className="text-neutral-500 font-bold ml-2">
                  Add New Tag
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authen */}
      <div className="flex flex-col h-screen w-[450px] mt-auto">
        <div className="mt-auto p-6 bg-neutral-50">
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
    </div>
  );
};

export default Navigation;

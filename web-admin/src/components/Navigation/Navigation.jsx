import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import TaskTab from "../TaskTab/TaskTab";

const Navigation = () => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <>
      <div className="w-[450px] p-6 min-h-screen bg-neutral-50">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[20px]">Menu</h2>
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
            state={"upcoming"}
            title={"Upcoming"}
            lengthTask={5}
          />
          <TaskTab
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            state={"today"}
            title={"Today"}
            lengthTask={10}
          />
          <TaskTab
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            state={"calendar"}
            title={"Calendar"}
          />
          <TaskTab
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            state={"sticky-wall"}
            title={"Sticky Wall"}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;

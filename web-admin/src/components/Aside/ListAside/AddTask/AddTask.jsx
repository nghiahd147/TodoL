import { Tooltip } from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import useControlTab from "../../../../store/useControlTab";

const AddTask = () => {
  const { handleTab } = useControlTab();

  return (
    <div className="flex items-center p-6">
      <Tooltip title="Back to list">
        <IoMdArrowRoundBack
          className="cursor-pointer w-6 h-6 mt-1"
          onClick={() => {
            handleTab("list-detail");
          }}
        />
      </Tooltip>
      <span className="font-bold text-2xl ml-6">Add New Task</span>
    </div>
  );
};

export default AddTask;

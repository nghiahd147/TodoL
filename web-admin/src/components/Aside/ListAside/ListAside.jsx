import { useEffect, useState } from "react";
import { Checkbox, message, Tooltip } from "antd";
import { TiDelete } from "react-icons/ti";
import useCateStore from "../../../store/useCateStore";
import useControlTab from "../../../store/useControlTab";
import useTodoStore from "../../../store/useTodoStore";
import { convertDate } from "../../../utils/format";
import Loader from "../../Loader/Loader";
import { FaPlus } from "react-icons/fa";

const ListAside = () => {
  const { idCategory, setCategoryId, getCategoryById, categoryDetail } =
    useCateStore();
  const { todos, getAllTodos, changeStatusTodo, isLoading, notification } =
    useTodoStore();
  const { handleTab } = useControlTab();
  const [mouse, setMouse] = useState({
    current: false,
    x: 0,
    y: 0,
  });

  const todoCategory = todos.filter((item) => item.cate_id === idCategory);

  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: notification,
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: notification,
    });
  };

  useEffect(() => {
    getCategoryById(idCategory);
  }, [idCategory]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleCheked = async (idTodo, e) => {
    const status = e.target.checked === false ? "in_progress" : "done";
    try {
      await changeStatusTodo(idTodo, status);
      successMessage();
      getAllTodos();
    } catch (error) {
      console.log("error", error);
      errorMessage();
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log("click");
    setMouse({
      current: true,
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleCloseMenu = () => {
    setMouse({ ...mouse, current: false });
  };

  return (
    <>
      {contextHolder}
      <div className="p-6">
        {/* Title */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl">{categoryDetail?.name}</span>
          <Tooltip title="Close this tab">
            <TiDelete
              className="cursor-pointer w-8 h-8"
              onClick={() => {
                handleTab(null);
              }}
            />
          </Tooltip>
        </div>

        {/* Todos */}
        <div className="mt-3">
          {/* Todo */}
          {isLoading == false ? (
            <>
              {todoCategory.map((item, _) => {
                return (
                  <div
                    key={item._id}
                    className="cursor-default w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-3xl p-2 my-2 shadow-sm"
                    onContextMenu={handleContextMenu}
                    onClick={handleCloseMenu}
                  >
                    {/* {mouse.current == true && (
                      <div
                        className={`absolute top-[${mouse.x}] right-[0] p-2-5 border border-gray-200 shadow-sm`}
                      >
                        aaa
                      </div>
                    )} */}
                    {/* Info */}
                    <div className="w-[80%] flex flex-col justify-between ml-4">
                      <span
                        className={`${
                          item.status == "done" && "line-through text-gray-300"
                        } overflow-hidden whitespace-nowrap text-ellipsis`}
                      >
                        {item.title}
                      </span>
                      <div className="mt-auto flex items-center">
                        <span
                          className={`${
                            item.status === "done" &&
                            "line-through text-gray-300"
                          } italic text-sm ${
                            item.priority === "high"
                              ? "text-red-300"
                              : item.priority === "medium"
                              ? "text-orange-300"
                              : "text-blue-300"
                          }`}
                        >
                          Level: {item.priority}
                        </span>
                        <span className="px-2">/</span>
                        <span
                          className={`${
                            item.status === "done" &&
                            "line-through text-gray-300"
                          } italic text-sm text-gray-500`}
                        >
                          Due date: {convertDate(item.due_date)}
                        </span>
                      </div>
                    </div>
                    {/* Checked */}
                    <div className="mr-4">
                      <Checkbox
                        checked={item.status == "in_progress" ? false : true}
                        onChange={(e) => handleCheked(item._id, e)}
                        style={{ transform: "scale(1.4)" }}
                      />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          )}
        </div>
        <div
          className="flex items-center w-full cursor-pointer mt-3 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2"
          onClick={() => handleTab("add-task")}
        >
          <FaPlus color="#737373" className="ml-2" />
          <span className="text-neutral-500 font-bold ml-2">Add New Task</span>
        </div>
      </div>
    </>
  );
};

export default ListAside;

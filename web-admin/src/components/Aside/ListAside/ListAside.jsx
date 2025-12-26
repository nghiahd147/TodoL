import { useEffect, useState } from "react";
import { Checkbox, message, Tooltip } from "antd";
import { TiDelete } from "react-icons/ti";
import useCateStore from "../../../store/useCateStore";
import useControlTab from "../../../store/useControlTab";
import useTodoStore from "../../../store/useTodoStore";
import { convertDate } from "../../../utils/format";
import Loader from "../../Loader/Loader";

const ListAside = () => {
  const { idCategory, getCategoryById, categoryDetail } = useCateStore();
  const { todos, getAllTodos, changeStatusTodo, isLoading, notification } =
    useTodoStore();
  const { handleTab } = useControlTab();

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

  return (
    <>
      {contextHolder}
      <div className="p-6">
        {/* Title */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl">
            Task List of {categoryDetail?.name}
          </span>
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
              {todos.map((item, _) => {
                return (
                  <div
                    key={item._id}
                    className="w-full flex items-center justify-between bg-gray-100 rounded-3xl p-2 my-2 shadow-sm"
                  >
                    {/* Info */}
                    <div className="w-[80%] flex flex-col justify-between ml-4">
                      <span
                        className={`${
                          item.status == "done" && "line-through text-gray-300"
                        } overflow-hidden whitespace-nowrap text-ellipsis`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`${
                          item.status === "done" && "line-through text-gray-300"
                        } italic text-sm`}
                      >
                        Due date: {convertDate(item.due_date)}
                      </span>
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
      </div>
    </>
  );
};

export default ListAside;

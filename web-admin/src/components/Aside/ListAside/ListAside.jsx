import { useEffect, useState } from "react";
import {
  Checkbox,
  message,
  Tooltip,
  Dropdown,
  Flex,
  Button,
  DatePicker,
} from "antd";
import { TiDelete, TiEdit } from "react-icons/ti";
import useCateStore from "../../../store/useCateStore";
import useControlTab from "../../../store/useControlTab";
import useTodoStore from "../../../store/useTodoStore";
import { convertDate, convertToUTC00 } from "../../../utils/format";
import Loader from "../../Loader/Loader";
import { FaPlus } from "react-icons/fa";

const ListAside = () => {
  const { idCategory, getCategoryById, categoryDetail } = useCateStore();
  const {
    idTodo,
    setIdTodo,
    todos,
    getAllTodos,
    changeStatusTodo,
    isLoading,
    notification,
    deleteTodo,
  } = useTodoStore();
  const { handleTab } = useControlTab();
  const [params, setParams] = useState([
    {
      status: "",
      due_date: "",
    },
  ]);

  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = (message) => {
    messageApi.open({
      type: "success",
      content: notification || `${message}`,
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: notification || `${message}`,
    });
  };

  const todoCategory = todos.filter((item) => item.cate_id === idCategory);

  useEffect(() => {
    getCategoryById(idCategory);
  }, [idCategory]);

  useEffect(() => {
    getAllTodos(params);
  }, [params]);

  const handleCheked = async (idTodo, e) => {
    const status = e.target.checked === false ? "in_progress" : "done";
    try {
      await changeStatusTodo(idTodo, status);
      getAllTodos(params);
      successMessage();
    } catch (error) {
      console.log("error", error);
      errorMessage();
    }
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTodo(idTodo);
      getAllTodos();
      successMessage("Deleted successfully");
    } catch (error) {
      errorMessage(error);
    }
  };

  const items = [
    {
      label: (
        <div
          className="flex items-center gap-x-2"
          onClick={() => {
            handleTab("edit-task");
          }}
        >
          <TiEdit size={16} color="orange" />
          <span target="_blank" rel="noopener noreferrer">
            Edit task
          </span>
        </div>
      ),
      key: "edit-task",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="flex items-center gap-x-2" onClick={handleDeleteTask}>
          <TiDelete size={20} color="red" />
          <span target="_blank" rel="noopener noreferrer">
            Remove task
          </span>
        </div>
      ),
      key: "remove task",
    },
  ];

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

        <div className="my-2 flex items-center">
          <span className="mr-2">Status:</span>
          <Flex gap="small" wrap>
            <Button
              color="cyan"
              variant="filled"
              onClick={() => setParams({ status: "in_progress" })}
            >
              In progress
            </Button>
            <Button
              color="green"
              variant="filled"
              onClick={() => setParams({ status: "done" })}
            >
              Done
            </Button>
            <Button
              color="danger"
              variant="filled"
              onClick={() => setParams({ status: "" })}
            >
              Cancel
            </Button>
          </Flex>
        </div>

        <div className="my-2 flex items-center">
          <span className="mr-4">Date:</span>
          <DatePicker
            onChange={(value) => {
              value
                ? setParams({ ...params, due_date: convertToUTC00(value) })
                : setParams({ ...params, due_date: "" });
            }}
          />
        </div>

        {/* Todos */}
        <div className="mt-3">
          {/* Todo */}
          {isLoading == false ? (
            <>
              {todoCategory.map((item, _) => {
                return (
                  <Dropdown key={item._id} menu={{ items }} trigger={["click"]}>
                    <div
                      className="relative cursor-default w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-3xl p-2 my-2 shadow-sm"
                      onClick={() => setIdTodo(item._id)}
                    >
                      {/* Info */}
                      <div className="w-[80%] flex flex-col justify-between ml-4">
                        <span
                          className={`${
                            item.status == "done" &&
                            "line-through text-gray-300"
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
                  </Dropdown>
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

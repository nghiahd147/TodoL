import { useEffect } from "react";
import { Checkbox, Tooltip } from "antd";
import { TiDelete } from "react-icons/ti";
import useCateStore from "../../../store/useCateStore";
import useControlTab from "../../../store/useControlTab";
import useTodoStore from "../../../store/useTodoStore";
import { convertDate } from "../../../utils/format";

const ListAside = () => {
  const { idCategory, getCategoryById, categoryDetail } = useCateStore();
  const { todos, getAllTodos } = useTodoStore();
  const { handleTab } = useControlTab();

  useEffect(() => {
    getCategoryById(idCategory);
  }, [idCategory]);

  useEffect(() => {
    getAllTodos();
  }, []);

  // const handleChange = (e) => {
  //   console.log("value", e);
  // };

  return (
    <>
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
          {todos.map((item, _) => {
            return (
              <div
                key={item._id}
                className="w-full flex items-center justify-between bg-gray-100 rounded-3xl p-2 my-2 shadow-sm"
              >
                {/* Info */}
                <div className="w-[80%] flex flex-col justify-between ml-4">
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.title}
                  </span>
                  <span className="italic text-sm text-gray-400">
                    Due date: {convertDate(item.due_date)}
                  </span>
                </div>
                {/* Checked */}
                <div className="mr-4">
                  <Checkbox style={{ transform: "scale(1.4)" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListAside;

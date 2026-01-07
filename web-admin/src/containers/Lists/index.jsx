import { useEffect } from "react";
import { Collapse, Tooltip } from "antd";
import useCateStore from "../../store/useCateStore";
import useControlTab from "../../store/useControlTab";
import useTodoStore from "../../store/useTodoStore";

const Lists = () => {
  const { listCategories, setCategoryId } = useCateStore();
  const { todos, getAllTodos } = useTodoStore();
  const { handleTab } = useControlTab();

  useEffect(() => {
    getAllTodos();
  }, []);

  const items = listCategories.map((itemCate, index) => {
    return {
      key: index,
      label: (
        <div
          className="flex items-center justify-between hover:text-blue-400 transition-all ease-in duration-300 w-full"
          onClick={() => {
            handleTab("list-detail");
            setCategoryId(itemCate._id);
          }}
        >
          <span>{itemCate.name}</span>
          <Tooltip title="Remaining tasks">
            <span className="w-6 h-6 rounded-2xl border bg-white text-center">
              {
                todos
                  .filter((itemTodo) => itemTodo.cate_id === itemCate._id)
                  .filter((itemTodo) => itemTodo.status === "in_progress")
                  .length
              }
            </span>
          </Tooltip>
        </div>
      ),
      children: <p>Description: {itemCate.description}</p>,
    };
  });

  return (
    <div>
      <h2 className="font-bold text-5xl">Lists</h2>
      <div className="mt-10">
        <Collapse items={items} />
      </div>
    </div>
  );
};

export default Lists;

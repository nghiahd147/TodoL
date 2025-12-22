import { Collapse, Tooltip } from "antd";
import useCateStore from "../../store/useCateStore";
import useControlTab from "../../store/useControlTab";
import { useParams } from "react-router-dom";

const Lists = () => {
  const { listCategories, setCategoryId } = useCateStore();
  const { handleTab } = useControlTab();

  const items = listCategories.map((item, index) => {
    return {
      key: index,
      label: (
        <div
          className="flex items-center justify-between hover:text-blue-400 transition-all ease-in duration-300 w-full"
          onClick={() => {
            handleTab("list-detail");
            setCategoryId(item._id);
          }}
        >
          <span>{item.name}</span>
          <Tooltip title="Remaining tasks">
            <span className="w-6 h-6 rounded-2xl border bg-white text-center">
              5
            </span>
          </Tooltip>
        </div>
      ),
      children: <p>Description: {item.description}</p>,
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

import { useEffect } from "react";
import useCateStore from "../../../store/useCateStore";
import useControlTab from "../../../store/useControlTab";
import { Tooltip } from "antd";
import { TiDelete } from "react-icons/ti";

const ListAside = () => {
  const { idCategory, getCategoryById, categoryDetail } = useCateStore();
  const { handleTab } = useControlTab();

  useEffect(() => {
    getCategoryById(idCategory);
  }, [idCategory]);

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
        <div className="mt-3"></div>
      </div>
    </>
  );
};

export default ListAside;

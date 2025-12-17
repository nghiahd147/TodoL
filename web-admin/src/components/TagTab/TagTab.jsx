import { useState } from "react";
// import { randomColor } from "../../utils/colors";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "antd";

const TagTab = (props) => {
  const { item, setDeleteItem, setDeleteModal } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        setDeleteItem(item), setDeleteModal(true);
      }}
      className={`z-10 w-[120px] h-[30px] text-center px-4 py-1 rounded-[5px] transition-all ease-in duration-500 overflow-hidden whitespace-nowrap text-ellipsis`}
      style={{ backgroundColor: `${item.color}` }}
    >
      {!isHover ? (
        <span
          className={`${item.color === "#fff" ? "text-black" : "text-white"}`}
        >
          #{item.name}
        </span>
      ) : (
        <Tooltip title="Delete this tag">
          <span className="flex items-center justify-center cursor-pointer">
            <MdDelete color="red" size={25} className="w-full" />
          </span>
        </Tooltip>
      )}
    </div>
  );
};

export default TagTab;

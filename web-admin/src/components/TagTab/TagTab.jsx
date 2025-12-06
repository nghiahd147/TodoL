import { randomColor } from "../../utils/colors";

const TagTab = (props) => {
  const { name } = props;

  return (
    <div
      className={`${randomColor()} w-20 text-center px-4 py-1 rounded-[5px] cursor-pointer`}
    >
      <span>{name}</span>
    </div>
  );
};

export default TagTab;

import { FaStickyNote } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskTab = (props) => {
  const { setCurrentTab, currentTab, state, pageLink, title, lengthTask } =
    props;

  return (
    <Link
      key={state}
      to={pageLink}
      onClick={() => setCurrentTab(state)}
      className="group bg-neutral-200 flex items-center justify-between my-1 cursor-pointer py-2 transition-all duration-300 px-2 rounded-sm"
    >
      <div className="flex items-center">
        {title == "Lists" && (
          <FaStickyNote
            color="#000"
            className="text-black transition-all duration-300"
          />
        )}
        <div className="w-5 h-5 rounded-2xl" />
        <span className="text-sm font-bold text-black transition-all duration-300">
          {title}
        </span>
      </div>
      <div className="w-10 bg-neutral-100 transition-all duration-300 px-3 rounded-md">
        <span className="block text-center text-sm font-bold">
          {lengthTask}
        </span>
      </div>
    </Link>
  );
};

export default TaskTab;

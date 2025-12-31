import { FaDiagramNext } from "react-icons/fa6";
import { FaCalendarAlt, FaStickyNote, FaListOl } from "react-icons/fa";
import { Link } from "react-router-dom";
import { randomColor } from "../../utils/colors";

const TaskTab = (props) => {
  const { setCurrentTab, currentTab, state, pageLink, title, lengthTask } =
    props;

  return (
    <Link
      key={state}
      to={pageLink}
      onClick={() => setCurrentTab(state)}
      className={`${
        currentTab == state && "bg-neutral-200"
      } 'group hover:bg-neutral-200 flex items-center justify-between my-1 cursor-pointer py-2 transition-all duration-300 px-2 rounded-sm`}
    >
      <div className="flex items-center">
        {title == "Today" && (
          <FaListOl
            color={`${currentTab == state ? "#000000" : "#737373"}`}
            className="mr-2 text-neutral-500 group-hover:text-black transition-all duration-300"
          />
        )}
        {title == "Lists" && (
          <FaStickyNote
            color={`${currentTab == state ? "#000000" : "#737373"}`}
            className="mr-2 text-neutral-500 group-hover:text-black transition-all duration-300"
          />
        )}
        {state == "" && (
          <div className={`w-5 h-5 rounded-2xl mr-2 ${randomColor()}`} />
        )}
        <span
          className={`${
            currentTab == state ? "text-black" : "text-neutral-500"
          } text-sm font-bold group-hover:text-black transition-all duration-300`}
        >
          {title}
        </span>
      </div>
      <div
        className={`${
          currentTab == state ? "bg-white" : "bg-neutral-100"
        }  w-10 group-hover:bg-white transition-all duration-300 px-3 rounded-md`}
      >
        <span className="block text-center text-sm font-bold">
          {lengthTask}
        </span>
      </div>
    </Link>
  );
};

export default TaskTab;

import useCateStore from "../../store/useCateStore";
import useControlTab from "../../store/useControlTab";
import CategoryAside from "./CategoryAside/CategoryAside";
import TagAside from "./TagAside/TagAside";

const Aside = () => {
  const { isTab } = useControlTab();
  const { idCategory } = useCateStore();
  return (
    <div
      className={`flex flex-col h-screen w-[450px] bg-neutral-50 absolute ${
        isTab || idCategory ? "right-0" : "-right-full"
      } transition-all duration-300 ease-in-out`}
    >
      {isTab === "category" || idCategory ? (
        <CategoryAside />
      ) : isTab === "tag" ? (
        <TagAside />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Aside;

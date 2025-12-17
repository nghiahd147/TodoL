import useCateStore from "../../store/useCateStore";
import useControlTab from "../../store/useControlTab";
import CategoryAside from "./CategoryAside/CategoryAside";
import NullAside from "./NullAside/NullAside";
import TagAside from "./TagAside/TagAside";

const Aside = () => {
  const { isTab } = useControlTab();
  const { idCategory } = useCateStore();
  return (
    <div className={`flex flex-col h-screen w-[450px] bg-neutral-50`}>
      {isTab === "category" || idCategory ? (
        <CategoryAside />
      ) : isTab === "tag" ? (
        <TagAside />
      ) : (
        <>
          <NullAside />
        </>
      )}
    </div>
  );
};

export default Aside;

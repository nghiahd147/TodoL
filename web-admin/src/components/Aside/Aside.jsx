import useCateStore from "../../store/useCateStore";
import useControlTab from "../../store/useControlTab";
import CategoryAside from "./CategoryAside/CategoryAside";
import ListAside from "./ListAside/ListAside";
import NullAside from "./NullAside/NullAside";
import TagAside from "./TagAside/TagAside";

const Aside = () => {
  const { isTab } = useControlTab();
  const { idCategory } = useCateStore();

  // console.log("isTab", isTab);

  return (
    <div className={`flex flex-col h-screen w-[450px] bg-neutral-50`}>
      {isTab === "category" ? (
        <CategoryAside />
      ) : isTab === "tag" ? (
        <TagAside />
      ) : isTab === "list-detail" ? (
        <ListAside />
      ) : (
        <>
          <NullAside />
        </>
      )}
    </div>
  );
};

export default Aside;

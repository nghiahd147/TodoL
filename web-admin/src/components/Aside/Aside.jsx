import { useEffect, useState } from "react";
import useCateStore from "../../store/useCateStore";
import useControlTab from "../../store/useControlTab";
import CategoryAside from "./CategoryAside/CategoryAside";
import AddTask from "./ListAside/AddTask/AddTask";
import ListAside from "./ListAside/ListAside";
import NullAside from "./NullAside/NullAside";
import TagAside from "./TagAside/TagAside";
import EditTask from "./ListAside/EditTask/EditTask";

const Aside = () => {
  const { isTab } = useControlTab();
  const { idCategory } = useCateStore();

  // console.log("isTab", isTab);

  return (
    <div className={`flex flex-col h-screen w-[450px] bg-neutral-50`}>
      {isTab === "category" ? (
        <CategoryAside />
      ) : isTab === "category-detail" ? (
        <CategoryAside />
      ) : isTab === "tag" ? (
        <TagAside />
      ) : isTab === "list-detail" ? (
        <ListAside />
      ) : isTab === "add-task" ? (
        <AddTask />
      ) : isTab === "edit-task" ? (
        <EditTask />
      ) : (
        <NullAside />
      )}
    </div>
  );
};

export default Aside;

import { Modal, Tooltip, message } from "antd";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { FaPlus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import useCateStore from "../../../store/useCateStore";
import useControlTab from "../../../store/useControlTab";
import { randomColor } from "../../../utils/colors";
const CategoryNavigation = () => {
  const [itemDelete, setDeleteItem] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const {
    isLoading,
    setCategoryId,
    listCategories,
    getListCategory,
    deleteCategory,
  } = useCateStore();
  const { handleTab } = useControlTab();

  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: `Deleted ${itemDelete.name} successfully`,
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: `Failed to deleted ${itemDelete.name}`,
    });
  };

  useEffect(() => {
    getListCategory();
  }, []);

  const handleDeleteCategory = async () => {
    try {
      if (!itemDelete._id) {
        errorMessage();
        return;
      }
      await deleteCategory(itemDelete._id);
      setDeleteModal(false);
      getListCategory();
      successMessage();
    } catch (error) {
      console.log("error", error.message);
      errorMessage();
    }
  };

  const hideModal = () => {
    setDeleteModal(false);
  };
  return (
    <>
      {contextHolder}
      <Modal
        title={`Are you sure delete this category ${itemDelete?.name}?`}
        open={deleteModal}
        onOk={handleDeleteCategory}
        onCancel={hideModal}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>If deleted, this category cannot be undone!</p>
      </Modal>
      {isLoading.length > 0 ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {listCategories.map((item, _) => {
            return (
              <div
                key={item._id}
                className="flex justify-between items-center bg-neutral-50 hover:bg-neutral-200s"
              >
                <div
                  key={item._id}
                  onClick={() => setCategoryId(item._id)}
                  className={`group flex items-center justify-between my-1 cursor-pointer py-2 px-2`}
                >
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-5 rounded-2xl mx-2 ${randomColor()}`}
                      />
                      <span
                        className={`text-neutral-500 text-sm font-bold group-hover:text-black transition-all duration-300`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
                <Tooltip title="Delete this category">
                  <MdDeleteSweep
                    color="#ff6666"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => {
                      setDeleteModal(true);
                      setDeleteItem(item);
                    }}
                  />
                </Tooltip>
              </div>
            );
          })}
        </>
      )}
      <div
        className="flex items-center w-full cursor-pointer mt-2 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2"
        onClick={() => handleTab("category")}
      >
        <FaPlus color="#737373" />
        <span className="text-neutral-500 font-bold ml-2">Add New List</span>
      </div>
    </>
  );
};

export default CategoryNavigation;

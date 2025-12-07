import { FaPlus } from "react-icons/fa";
import { Modal, message } from "antd";
import { useEffect, useState } from "react";
import TagTab from "../../TagTab/TagTab";
import Loader from "../../Loader/Loader";
import useTagStore from "../../../store/useTagStore";
import useControlTab from "../../../store/useControlTab";

const TagNavigation = () => {
  const [itemDelete, setDeleteItem] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const { isLoading, listTags, getListTags, deleteTag } = useTagStore();
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
    getListTags();
  }, []);

  const handleDeleteTag = async () => {
    console.log(itemDelete._id);
    try {
      if (!itemDelete._id) {
        errorMessage();
        return;
      }
      await deleteTag(itemDelete._id);
      setDeleteModal(false);
      getListTags();
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
        title={`Are you sure delete this tag #${itemDelete?.name}?`}
        open={deleteModal}
        onOk={handleDeleteTag}
        onCancel={hideModal}
        okText="Confirm"
        cancelText="Cancel"
      >
        <p>If deleted, this tag cannot be undone!</p>
      </Modal>
      <div className="w-full mt-4 ml-2">
        <h3 className="font-bold text-[16px] text-black">Tags</h3>
        <div className="flex items-center gap-x-3 gap-y-3 mt-4 flex-wrap">
          {/* Tag */}
          {isLoading ? (
            <div className="w-full flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <>
              {listTags.map((item, _) => {
                return (
                  <TagTab
                    key={item._id}
                    item={item}
                    setDeleteItem={setDeleteItem}
                    setDeleteModal={setDeleteModal}
                  />
                );
              })}
            </>
          )}

          <div
            className="flex items-center w-full cursor-pointer mt-2 hover:bg-neutral-200 transition-all duration-300 py-1 rounded-xl px-2"
            onClick={() => handleTab("tag")}
          >
            <FaPlus color="#737373" />
            <span className="text-neutral-500 font-bold ml-2">Add New Tag</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagNavigation;

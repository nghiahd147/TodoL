import { Input } from "antd";
import Button from "../Button/Button";
import { Form, message } from "antd";
import useCateStore from "../../store/useCateStore";
import { useEffect } from "react";

const Aside = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const {
    getListCategory,
    getCategoryById,
    idCategory,
    setCategoryId,
    categoryDetail,
    createCategory,
  } = useCateStore();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Created category successfully",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Error",
    });
  };

  useEffect(() => {
    const fetchCategoryDetail = async () => {
      if (idCategory) {
        await getCategoryById(idCategory);
        form.setFieldsValue({
          name: categoryDetail?.name,
          description: categoryDetail?.description,
        });
      } else {
        form.resetFields();
      }
    };
    fetchCategoryDetail();
  }, [idCategory]);

  const onFinish = async (value) => {
    try {
      if (idCategory) {
        await updateCategory(idCategory, value);
        getListCategory();
        form.resetFields();
        success();
        return;
      }
      await createCategory(value);
      getListCategory();
      form.resetFields();
      success();
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => {
    console.log("clicked");
    setCategoryId(null);
    form.resetFields();
  };

  return (
    <div className="flex flex-col h-screen w-[450px]">
      {contextHolder}
      <Form form={form} onFinish={onFinish}>
        <div className="p-6 bg-neutral-50">
          <span className="font-bold text-2xl">Add New List</span>
          <div className="flex flex-col gap-y-3 mt-3">
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input
                className="outline-none bg-neutral-50"
                placeholder="Name"
                variant="underlined"
              />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <TextArea
                placeholder="Description"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="mt-2 p-6 gap-x-6 flex items-center">
          <Button name="Cancel" htmlType="reset" />
          <Button name="Save changes" />
        </div>
      </Form>
    </div>
  );
};

export default Aside;

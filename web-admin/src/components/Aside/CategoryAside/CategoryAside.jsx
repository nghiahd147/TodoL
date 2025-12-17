import { ColorPicker, Input, Space, Tooltip } from "antd";
import { Form, message, Button } from "antd";
import useCateStore from "../../../store/useCateStore";
import { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import useControlTab from "../../../store/useControlTab";

const CategoryAside = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const {
    getListCategory,
    getCategoryById,
    idCategory,
    categoryDetail,
    setCategoryId,
    createCategory,
    updateCategory,
  } = useCateStore();

  const { handleTab } = useControlTab();

  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: `Category ${idCategory ? "updated" : "created"} successfully`,
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: `Failed to ${idCategory ? "updated" : "created"} category`,
    });
  };

  useEffect(() => {
    if (!idCategory) {
      form.resetFields();
      return;
    }
    form.setFieldsValue({
      name: categoryDetail?.name,
      description: categoryDetail?.description,
      color: categoryDetail?.color,
    });
  }, [categoryDetail]);

  useEffect(() => {
    const fetchCategoryDetail = async () => {
      try {
        if (idCategory) {
          await getCategoryById(idCategory);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCategoryDetail();
  }, [idCategory]);

  const onFinish = async (values) => {
    const { name, description, color } = values;

    const payload = {
      name,
      description,
      color: color.toHexString(),
    };

    try {
      if (idCategory) {
        await updateCategory(idCategory, payload);
        getListCategory();
        form.resetFields();
        successMessage();
        setCategoryId(null);
        return;
      }
      await createCategory(payload);
      getListCategory();
      setCategoryId(null);
      form.resetFields();
      successMessage();
    } catch (error) {
      console.log(error);
      errorMessage();
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <Form form={form} onFinish={onFinish} autoComplete="off">
        <div className="p-6 ">
          <div className="flex items-center justify-between">
            <span className="font-bold text-2xl">
              {idCategory ? "Category Details" : "Create Category"}
            </span>
            <Tooltip title="Close this tab">
              <TiDelete
                className="cursor-pointer w-8 h-8"
                onClick={() => {
                  handleTab(null);
                  form.resetFields();
                  setCategoryId(null);
                }}
              />
            </Tooltip>
          </div>
          <div className="flex flex-col gap-y-3 mt-3">
            <span>Nhập tên danh mục:</span>
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
            <span>Nhập mô tả:</span>
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
            <span>Chọn màu:</span>
            <Form.Item
              name="color"
              rules={[{ required: true, message: "Please choose color" }]}
            >
              <ColorPicker defaultValue="#fff" />
            </Form.Item>
          </div>
        </div>
        <div className="mt-2 p-6 gap-x-6 flex items-center">
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default CategoryAside;

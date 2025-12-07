import { Input, Space, Tooltip } from "antd";
import { Form, message, Button } from "antd";
import useCateStore from "../../../store/useCateStore";
import { useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
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
    });
  }, [categoryDetail]);

  useEffect(() => {
    const fetchCategoryDetail = async () => {
      if (idCategory) {
        await getCategoryById(idCategory);
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
        successMessage();
        setCategoryId(null);
        return;
      }
      await createCategory(value);
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
    setCategoryId(null);
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
              <FaArrowAltCircleRight
                className="cursor-pointer w-5 h-5"
                onClick={() => {
                  handleTab(null);
                  onReset();
                }}
              />
            </Tooltip>
          </div>
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

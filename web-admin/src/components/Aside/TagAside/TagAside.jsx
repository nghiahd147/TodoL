import { ColorPicker, Input, Space, Tooltip } from "antd";
import { Form, message, Button } from "antd";
import { FaArrowAltCircleRight } from "react-icons/fa";
import useControlTab from "../../../store/useControlTab";
import useTagStore from "../../../store/useTagStore";
import { TiDelete } from "react-icons/ti";

const TagAside = () => {
  const [form] = Form.useForm();
  const { getListTags, createTag } = useTagStore();
  const { handleTab } = useControlTab();

  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: "Tag created successfully",
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: "Failed to created tag",
    });
  };

  const onFinish = async (values) => {
    const { name, color } = values;

    const payload = {
      name,
      color: color.toHexString(),
    };

    try {
      await createTag(payload);
      getListTags();
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
            <span className="font-bold text-2xl">Create Tag</span>
            <Tooltip title="Close this tab">
              <TiDelete
                className="cursor-pointer w-8 h-8"
                onClick={() => {
                  handleTab(null);
                  onReset();
                }}
              />
            </Tooltip>
          </div>
          <div className="flex flex-col gap-y-3 mt-3">
            <span>Nhập tên tag:</span>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input your name tag!" },
              ]}
            >
              <Input
                className="outline-none bg-neutral-50"
                placeholder="Name"
                variant="underlined"
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

export default TagAside;

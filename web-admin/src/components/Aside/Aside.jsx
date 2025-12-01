import { Input } from "antd";
import Button from "../Button/Button";
import { Form } from "antd";
import useCateStore from "../../store/useCateStore";

const Aside = () => {
  const { TextArea } = Input;

  const { createCategory } = useCateStore();

  const onFinish = (value) => {
    createCategory(value);
  };

  return (
    <div className="flex flex-col h-screen w-[450px]">
      <Form onFinish={onFinish}>
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
          <Button name="Cancel" />
          <Button name="Save changes" />
        </div>
      </Form>
    </div>
  );
};

export default Aside;

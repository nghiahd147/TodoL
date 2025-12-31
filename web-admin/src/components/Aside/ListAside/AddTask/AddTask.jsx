import { Button, Form, Input, InputNumber, Select, Tooltip } from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import useControlTab from "../../../../store/useControlTab";

const AddTask = () => {
  const { handleTab } = useControlTab();
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      title: "${label} is not a valid title!",
      status: "${label} is not a valid status!",
      priority: "${label} is not a valid priority",
      due_date: "${label} is not a valid due_date",
      cate_id: "${label} is not a valid cate_id",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="flex items-center p-6">
        <Tooltip title="Back to list">
          <IoMdArrowRoundBack
            className="cursor-pointer w-6 h-6 mt-1"
            onClick={() => {
              handleTab("list-detail");
            }}
          />
        </Tooltip>
        <span className="font-bold text-2xl ml-6">Add New Task</span>
      </div>

      <Form
        {...layout}
        name="add-task"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item name={"title"} label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={"status"} label="Status" rules={[{ required: true }]}>
          <Select
            defaultValue="in_progress"
            options={[
              { label: "In progress", value: "in_progress" },
              { label: "Done", value: "done" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={"priority"}
          label="Priority"
          rules={[{ required: true }]}
        >
          <Select
            defaultValue="high"
            options={[
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={"due_date"}
          label="Due date"
          rules={[{ required: true }]}
        >
          due date
        </Form.Item>
        <Form.Item
          name={"cate_id"}
          label="Category"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddTask;

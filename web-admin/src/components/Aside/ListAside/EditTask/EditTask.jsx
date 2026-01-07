import { useEffect } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Tooltip,
} from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import useControlTab from "../../../../store/useControlTab";
import useCateStore from "../../../../store/useCateStore";
import useTodoStore from "../../../../store/useTodoStore";
import dayjs from "dayjs";

const EditTask = () => {
  const { handleTab } = useControlTab();
  const { idCategory } = useCateStore();
  const [form] = Form.useForm();
  const { idTodo, todoDetail, getTodoDetail, updateTodo } = useTodoStore();

  useEffect(() => {
    const fetchTodoDetail = async () => {
      try {
        if (idTodo) {
          await getTodoDetail(idTodo);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchTodoDetail();
  }, [idTodo]);

  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = (message) => {
    messageApi.open({
      type: "success",
      content: `${message}`,
    });
  };
  const errorMessage = (message) => {
    messageApi.open({
      type: "error",
      content: `${message}`,
    });
  };

  const layout = {
    labelCol: { span: 5 },
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

  useEffect(() => {
    if (!todoDetail) return;
    form.setFieldsValue({
      title: todoDetail.title,
      status: todoDetail.status,
      priority: todoDetail.priority,
      due_date: todoDetail.due_date ? dayjs(todoDetail.due_date) : null,
      cate_id: todoDetail.cate_id ?? idCategory,
    });
  }, [todoDetail]);

  const onFinish = async (values) => {
    const { title, status, priority, due_date, cate_id } = values;
    const payload = {
      title,
      status,
      priority,
      due_date: due_date.format("YYYY-MM-DD"),
      cate_id,
    };
    try {
      await updateTodo(idTodo, payload);
      successMessage("Updated successfully");
      setTimeout(() => {
        handleTab("list-detail");
      }, 1000);
    } catch (error) {
      errorMessage(error);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex items-center p-6">
        <Tooltip title="Back to list">
          <IoMdArrowRoundBack
            className="cursor-pointer w-6 h-6 mt-1"
            onClick={() => {
              handleTab("list-detail");
            }}
          />
        </Tooltip>
        <span className="font-bold text-2xl ml-6">Update Task</span>
      </div>

      <Form
        {...layout}
        form={form}
        name="add-task"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        // initialValues={initialValuesTodo}
        validateMessages={validateMessages}
      >
        <Form.Item name={"title"} label="Title" rules={[{ required: true }]}>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item name={"status"} label="Status" rules={[{ required: true }]}>
          <Select
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
            options={[
              { label: "High", value: "high" },
              { label: "Medium", value: "medium" },
              { label: "Low", value: "low" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={"due_date"}
          label="Due date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name={"cate_id"}
          label="Category"
          rules={[{ required: true }]}
          hidden
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

export default EditTask;

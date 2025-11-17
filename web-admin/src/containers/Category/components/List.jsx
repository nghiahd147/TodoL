import { Card } from "antd";

const List = (props) => {
  const { data } = props;
  return data.map((item, index) => (
    <Card
      key={index}
      className="border-amber-200 border-2"
      title={item.name}
      variant="borderless"
    >
      {item.description}
    </Card>
  ));
};

export default List;

import { Col, Row } from "antd";
import { useEffect } from "react";
import useCateStore from "../../store/useCateStore";
import List from "./components/List";
import Loader from "../../components/Loader/Loader";

const Category = () => {
  const { isLoading, listCategories, getListCategory } = useCateStore();

  useEffect(() => {
    getListCategory();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex-col align-middle justify-center">
        <h2>Danh mục công việc</h2>
        {!isLoading ? (
          <>
            <Row>
              <Col span={4}>
                {listCategories.length > 0 ? (
                  <>
                    <List data={listCategories} />
                  </>
                ) : (
                  <>Không có dữ liệu</>
                )}
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
      </div>
    </>
  );
};

export default Category;

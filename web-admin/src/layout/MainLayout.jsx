import { Route, Routes } from "react-router-dom";
import CategoryPage from "../containers/Category/index.jsx";
import NotFound from "../containers/NotFound/index.jsx";
import Todos from "../containers/Todo/index.jsx";
import HomePage from "../containers/Home/index.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
const MainLayout = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full pt-6 pb-6 pl-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;

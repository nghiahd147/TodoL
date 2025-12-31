import { Route, Routes } from "react-router-dom";
import NotFound from "../containers/NotFound/index.jsx";
import TodayPage from "../containers/Today/index.jsx";
import ListPage from "../containers/Lists/index.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import Aside from "../components/Aside/Aside.jsx";
const MainLayout = () => {
  return (
    <div className="flex justify-between relative overflow-x-hidden">
      <Navigation />
      <div className="min-h-screen flex-1 pt-6 pb-6 pl-6 pr-6">
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/lists" element={<ListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Aside />
    </div>
  );
};

export default MainLayout;

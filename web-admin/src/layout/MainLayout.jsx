import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.jsx";
import Aside from "../components/Aside/Aside.jsx";
const MainLayout = () => {
  return (
    <>
      <div className="flex justify-between relative overflow-x-hidden">
        <Navigation />
        <div className="min-h-screen flex-1 pt-6 pb-6 pl-6 pr-6">
          <Outlet />
        </div>
        <Aside />
      </div>
    </>
  );
};

export default MainLayout;

import { Route, Routes } from "react-router-dom";
import UpcomingPage from "../containers/Upcoming/index.jsx";
import NotFound from "../containers/NotFound/index.jsx";
import CalendarPage from "../containers/Calendar/index.jsx";
import TodayPage from "../containers/Today/index.jsx";
import StickyWallPage from "../containers/StickyWall/index.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import Aside from "../components/Aside/Aside.jsx";
const MainLayout = () => {
  return (
    <div className="flex justify-between">
      <Navigation />
      <div className="min-h-screen flex-1 pt-6 pb-6 pl-6">
        <Routes>
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/sticky-wall" element={<StickyWallPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Aside />
    </div>
  );
};

export default MainLayout;

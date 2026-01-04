import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import NotFound from "./containers/NotFound/index.jsx";
import TodayPage from "./containers/Today/index.jsx";
import ListPage from "./containers/Lists/index.jsx";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<TodayPage />} />
            <Route path="/lists" element={<ListPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

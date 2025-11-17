import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./containers/Category/index.jsx";
import NotFound from "./containers/NotFound/index.jsx";
import Todos from "./containers/Todo/index.jsx";
import HomePage from "./containers/Home/index.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

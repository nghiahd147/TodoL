import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Stores from "./pages/Stores";
import RateStore from "./pages/RateStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/rate/:id" element={<RateStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
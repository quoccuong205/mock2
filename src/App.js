import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Forgot from "./Component/Forgot";
import Homepage from "./Component/Homepage";
import Login from "./Component/Login";
import Register from "./Component/Register";
// import Review from "./Component/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

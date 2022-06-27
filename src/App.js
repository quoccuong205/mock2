import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Forgot from "./Component/Forgot";
import Homepage from "./Component/Homepage";
import Login from "./Component/Login";
import Register from "./Component/Register";
import UserDetails from "./Component/UserDetails";
// import Review from "./Component/Review";
import {
  selectRole,
  selectAccessToken,
  selectUsernameAuth,
  selectAuthen,
} from "./redux/auth/selector";

function App() {
  const role = useSelector(selectRole);
  const accessToken = useSelector(selectAccessToken);
  const username = useSelector(selectUsernameAuth);
  // console.log(role + "..." + accessToken + "..." + username + "...");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-detail" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

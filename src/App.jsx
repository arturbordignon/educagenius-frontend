import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/auth/Login/Login";
import { Forgot } from "./pages/auth/Forgot/Forgot";
import { Reset } from "./pages/auth/Reset/Reset";
import { MenuAjuda } from "./components/Ajuda/MenuAjuda";
import { MenuAtividades } from "./components/Atividades/MenuAtividades";
import { MenuAulas } from "./components/Aulas/MenuAulas";
import { MenuDashboard } from "./components/Dashboard/MenuDashboard";
import { MenuProvas } from "./components/Provas/MenuProvas";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "./redux/features/auth/authSlice";
import { useEffect } from "react";

axios.defaults.withCredentials = true;

export function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />

        <Route path="/dashboard" element={<MenuDashboard />} />
        <Route path="/aulas" element={<MenuAulas />} />
        <Route path="/provas" element={<MenuProvas />} />
        <Route path="/atividades" element={<MenuAtividades />} />
        <Route path="/ajuda" element={<MenuAjuda />} />
      </Routes>
    </BrowserRouter>
  );
}

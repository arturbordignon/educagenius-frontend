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
import { useDispatch } from "react-redux";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { getLoginStatus } from "./services/authServices";
import { useEffect } from "react";

axios.defaults.withCredentials = true;

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }

    loginStatus();
  }, [dispatch]);

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

import "./Forgot.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import logoImg from "../../../assets/educagenius.png";
import { forgotPassword, validateEmail } from "../../../services/authServices";

export function Forgot() {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Por favor, digite seu email");
    }

    if (!validateEmail(email)) {
      return toast.error("Por favor, digite um email válido");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
  };

  return (
    <div className="container">
      <div className="box">
        <header className="header">
          <img src={logoImg} alt="Workflow" className="logoImg" />
          <span>Esqueceu sua Senha?</span>
        </header>

        <form onSubmit={forgot}>
          <div className="inputContainer">
            <input
              type="email"
              placeholder="Digite seu email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="button">
            Resetar Senha
          </button>
          <div className="footer">
            <p>Lembrou da Senha?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

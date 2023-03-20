import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../../services/authServices";
import "./Reset.css";
import logoImg from "../../../assets/educagenius.png";

const initialState = {
  password: "",
  password2: "",
};

export function Reset() {
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;

  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("A senha deve conter no mínimo 6 caracteres");
    }

    if (password !== password2) {
      return toast.error("As senhas não são iguais");
    }

    const userData = {
      password,
      password2,
    };

    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <header className="header">
          <img src={logoImg} alt="Workflow" className="logoImg" />
          <span>Resetar Senha</span>
        </header>

        <form onSubmit={reset}>
          <div className="inputContainer">
            <input
              type="password"
              placeholder="Digite a Nova Senha"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirme a Nova Senha"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="button">
            Resetar Senha
          </button>
          <div className="footer">
            <p>Entre em sua Conta</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

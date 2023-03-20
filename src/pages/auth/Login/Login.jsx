import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/educagenius.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../../services/authServices";
import {
  selectIsLoggedIn,
  SET_LOGIN,
  SET_NAME,
} from "../../../redux/features/auth/authSlice";

const initialState = {
  email: "",
  password: "",
};

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn === true && isLoggedIn !== null) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Por favor, Preencha todos os campos");
    }

    if (!validateEmail(email)) {
      return toast.error("Por favor, digite um email válido");
    }

    const userData = {
      email,
      password,
    };

    try {
      const data = await loginUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <header className="header">
          <img src={logoImg} alt="Workflow" className="logoImg" />
          <span>Entre na sua conta</span>
        </header>

        <form onSubmit={login}>
          <div className="inputContainer">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="inputContainer">
            <div className="space-label">
              <label htmlFor="password">Senha</label>
              <Link to="/forgot">Esqueceu sua senha?</Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <button className="button" type="submit">
            Entrar
          </button>
          <div className="footer">
            <p>Você não tem uma conta?</p>
            <a href="https://educagenius.com">Conheça o EducaGenius</a>
          </div>
        </form>
      </div>
    </div>
  );
}

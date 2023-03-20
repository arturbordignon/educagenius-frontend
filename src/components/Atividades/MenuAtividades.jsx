import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRedirectLoggedOutUser } from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { Sidebar } from "../Dashboard/Sidebar";
import teenagers from "../../assets/teenagers.png";
import children from "../../assets/children.png";
import kids from "../../assets/kids.png";

export function MenuAtividades() {
  useRedirectLoggedOutUser("/login");
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Div>
      <Sidebar />
      <Section>
        <div className="title">
          <h1>Buscar Atividades</h1>
        </div>
        <div className="card">
          <div className="cardContainer">
            <h1>Pré-Escola</h1>
            <img src={children} alt="Activity" />
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/11U0UK5ve65TJDKp1sD94YOWlNYqVWrgk?usp=share_link"
            >
              Baixar Atividade
            </a>
          </div>
          <div className="cardContainer">
            <h1>Ensino Fundamental</h1>
            <img src={kids} alt="Activity" />
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1bBwjKslcFDQJcwrxLRsA832mVd6iOuGU?usp=share_link"
            >
              Baixar Atividade
            </a>
          </div>
          <div className="cardContainer">
            <h1>Ensino Médio</h1>
            <img src={teenagers} alt="Activity" />
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/16ffaY2DZAB9He2u_Xn-Z5L9p9YZpfZx5?usp=share_link"
            >
              Baixar Atividade
            </a>
          </div>
        </div>
      </Section>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1.5rem;
    }
  }
  .card {
    display: grid;
    grid-template-columns: 310px 310px 310px;
    grid-gap: 1.7rem;
    margin: 2rem 0 0 0;
    align-items: center;
    justify-content: center;
  }
  .cardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    gap: 0.7rem;

    img {
      width: 200px;
      margin: 1rem 0;
    }

    a {
      text-decoration: none;
      background-color: #0d703a;
      padding: 0.4rem;
      width: 90%;
      color: #fff;
      font-size: 1.2rem;
      border-radius: 10px;
      text-align: center;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 480px) {
    margin-left: 0.5rem;
    .card {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.7rem;
    }
  }
`;

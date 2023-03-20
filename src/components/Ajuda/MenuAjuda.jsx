import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRedirectLoggedOutUser } from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { Sidebar } from "../Dashboard/Sidebar";
import paymentPhoto from "../../assets/payments.png";
import faqPhoto from "../../assets/doubts.png";
import suggestionPhoto from "../../assets/suggest.png";

export function MenuAjuda() {
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
          <h1>Como podemos Ajudar?</h1>
        </div>
        <div className="card">
          <div className="cardContainer">
            <h1>Tire suas Dúvidas</h1>
            <img src={faqPhoto} alt="FAQ" />
            <a href="#">Perguntas Frequentes</a>
          </div>
          <div className="cardContainer">
            <h1>Tudo sobre pagamentos</h1>
            <img src={paymentPhoto} alt="Payments" />
            <a href="#">Financeiro</a>
          </div>
          <div className="cardContainer">
            <h1>Faça sua Sugestão</h1>
            <img src={suggestionPhoto} alt="Suggests" />
            <a href="#">Pedidos</a>
          </div>
        </div>
        <div className="formSection">
          <form>
            {/* Form to send an email of an error  */}

            <h1>Precisa falar com nosso suporte?</h1>

            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>

            <button type="submit">Enviar Mensagem</button>
          </form>
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
  .formSection {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: #fff;
      width: 500px;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.06);
      padding: 1.5rem;
      border-radius: 10px;
      gap: 0.7rem;

      h1 {
        margin: 0 auto;
      }

      label {
        font-size: 1.2rem;
      }

      input {
        padding: 0.7rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        outline: none;
        font-size: 1rem;
      }

      textarea {
        padding: 0.7rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        outline: none;
        font-size: 1rem;
        resize: none;
      }

      button {
        padding: 0.7rem;
        background-color: #0d703a;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: 1.2rem;
        cursor: pointer;
        margin-top: 0.7rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 480px) {
    margin-left: 0.5rem;
    .card {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.7rem;
    }
    .formSection {
      form {
        width: 100%;
      }
    }
  }
`;

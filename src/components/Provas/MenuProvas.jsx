import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../services/authServices";
import styled from "styled-components";
import { useRedirectLoggedOutUser } from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { Sidebar } from "../Dashboard/Sidebar";
import Loader from "react-spinner-loader";

export function MenuProvas() {
  const [serie, setSerie] = useState("");
  const [nivelDificuldade, setNivelDificuldade] = useState("facil");
  const [conteudo, setConteudo] = useState("");
  const [numquestions, setNumQuestions] = useState("");
  const [questiontype, setQuestionType] = useState("discursiva");
  const [generatedTest, setGeneratedTest] = useState("");
  const [loader, setLoader] = useState(false);

  useRedirectLoggedOutUser("/login");
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  const generate_provas = async (e) => {
    e.preventDefault();

    const prompt = `
      Faça uma prova escolar para os alunos da série ${serie}, com o nível de dificuldade ${nivelDificuldade}, sobre o conteúdo: ${conteudo}, com ${numquestions} questões do tipo ${questiontype}.
      `;

    generateTestRequest(prompt);
    setLoader(true);
  };

  async function generateTestRequest(prompt) {
    try {
      const response = await fetch(`${BACKEND_URL}/openai/generateresponse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      setLoader(false);

      if (!response.ok) {
        throw new Error("Falha ao gerar aula");
      }

      const data = await response.json();
      setGeneratedTest(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Div>
      <Sidebar />
      <Section>
        <h1>Gerador de Provas</h1>
        <form onSubmit={generate_provas}>
          <div className="inputs">
            <div className="input __one">
              <label htmlFor="serie">Qual a Série?</label>
              <input
                type="text"
                name="serie"
                id="serie"
                placeholder="Ex.: 5 Ano"
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
              />
            </div>
            <div className="input __two">
              <label htmlFor="nivel-dificulty">Nível de Dificuldade:</label>
              <select
                name="nivel-dificulty"
                id="nivel-dificulty"
                value={nivelDificuldade}
                onChange={(e) => setNivelDificuldade(e.target.value)}
              >
                <option value="facil">Fácil</option>
                <option value="medio">Médio</option>
                <option value="dificil">Difícil</option>
              </select>
            </div>
            <div className="input __three">
              <label htmlFor="content">Conteúdo:</label>
              <input
                type="text"
                name="content"
                id="content"
                placeholder="Ex.: Eventos Históricos"
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
              />
            </div>
            <div className="input __four">
              <label htmlFor="questions">Número de Questões:</label>
              <input
                type="number"
                name="questions"
                id="questions"
                placeholder="Ex.: 10"
                value={numquestions}
                onChange={(e) => setNumQuestions(e.target.value)}
              />
            </div>
            <div className="input __five">
              <label htmlFor="question-type">Tipo de Questão:</label>
              <select
                name="question-type"
                id="question-type"
                value={questiontype}
                onChange={(e) => setQuestionType(e.target.value)}
              >
                <option value="discursiva">Discursiva</option>
                <option value="objetiva">Objetiva</option>
                <option value="enem">Enem</option>
              </select>
            </div>
            <div className="input __button">
              <button type="submit">Gerar Prova</button>
            </div>
            <div className="result">
              {loader === true ? (
                <Loader show={loader} type="box" message="Gerando Prova" />
              ) : (
                <>
                  <h2>Prova Gerada:</h2>
                  <p>{generatedTest}</p>
                </>
              )}
            </div>
          </div>
        </form>
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
  .inputs {
    display: grid;
    grid-template-columns: 140px 155px 250px 163px 150px;
    grid-gap: 1.7rem;
    margin: 2rem 0 0 0;
  }
  .input {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    select {
      padding: 0.65rem 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      outline: none;
      font-size: 1rem;
    }
    input {
      padding: 0.7rem 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      outline: none;
      font-size: 1rem;
    }
    button {
      padding: 0.7rem 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      outline: none;
      font-size: 1rem;
      background-color: #0d703a;
      color: #fff;
      cursor: pointer;
      width: 150px;
    }
  }
  .result {
    margin-top: 2rem;
    grid-column: 1 / -1;
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      white-space: pre-line;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 480px) {
    margin-left: 0.5rem;
    .inputs {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.7rem;
    }
  }
`;

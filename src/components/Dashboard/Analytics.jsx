import styled from "styled-components";
import { SiGoogleclassroom } from "react-icons/si";
import { BiTask } from "react-icons/bi";
import { cardStyles } from "./ReusableStyles";
import { Link } from "react-router-dom";

export function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="logo">
          <SiGoogleclassroom />
        </div>
        <div className="content">
          <h5>Crie Aulas Incríveis </h5>
          <h2>Em Menos de 1 Minuto</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiTask />
        </div>
        <div className="content">
          <h5>Crie Provas Agora Mesmo </h5>
          <h2>Em Menos de 1 Minuto</h2>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;

    .logo {
      border-radius: 3rem;
      border: 1px solid #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      svg {
        font-size: 1.5rem;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      h5 {
        font-size: 1.3rem;
        font-weight: 600;
      }
      h2 {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      padding: 1rem 1rem;
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;

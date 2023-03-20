import styled from "styled-components";
import ImgClasses from "../../assets/classes.png";
import { cardStyles } from "./ReusableStyles";

export function Aulas() {
  return (
    <Section>
      <div className="card">
        <h1>Modelos de Aulas</h1>
        <img className="img-test" src={ImgClasses} alt="" />
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1x0aATDLlFDeoXLjW-8WIzyDTRNv4cqk9?usp=share_link"
          className="button-class"
        >
          Clique aqui
        </a>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.3rem;
  .card {
    h1 {
      color: #000;
      font-family: "Nunito", sans-serif;
      text-align: center;
    }
  }
  .img-test {
    width: 210px;
  }
  .button-class {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: #0d703a;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 1rem;
    margin-bottom: -10px;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    .card {
      h1 {
        font-size: 1.2rem;
      }
    }
  }
`;

import styled from "styled-components";

export function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h1>
          O melhor Parceiro do Professor - <span>EducaGenius</span>
        </h1>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  color: #000;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #0d703a;
        font-family: "Nunito", sans-serif;
        letter-spacing: 0.1rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;

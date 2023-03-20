import styled from "styled-components";
import { Analytics } from "./Analytics";
import { Aulas } from "./Aulas";
import { Navbar } from "./Navbar";
import { Atividades } from "./Atividades";
import { Provas } from "./Provas";
import { Sidebar } from "./Sidebar";
import { useRedirectLoggedOutUser } from "../../customHook/useRedirectLoggedOutUser";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";

export function MenuDashboard() {
  useRedirectLoggedOutUser("/login");
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Div>
      <Sidebar />
      <Section>
        <Navbar />
        <div className="grid">
          <div className="row__one">
            <Analytics />
          </div>
          <div className="row__two">
            <Aulas />
            <Provas />
            <Atividades />
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
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1.2rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;

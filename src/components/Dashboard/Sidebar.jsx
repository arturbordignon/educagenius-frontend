import React, { useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill, RiSurveyFill } from "react-icons/ri";
import { FaAddressCard, FaChalkboardTeacher } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/educagenius.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";

export function Sidebar() {
  const [navbarState, setNavbarState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <>
      <Section>
        <div className="top">
          <div>
            <img src={logo} alt="EducaGenius Logo" className="logo-smart" />
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li className={isActiveLink("/dashboard") ? "active" : "none"}>
                <Link to="/dashboard">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li className={isActiveLink("/aulas") ? "active" : "none"}>
                <Link to="/aulas">
                  <FaChalkboardTeacher />
                  <span> Aulas</span>
                </Link>
              </li>
              <li className={isActiveLink("/provas") ? "active" : "none"}>
                <Link to="/provas">
                  <RiSurveyFill />
                  <span> Provas</span>
                </Link>
              </li>
              <li className={isActiveLink("/atividades") ? "active" : "none"}>
                <Link to="/atividades">
                  <BsFillGrid1X2Fill />
                  <span> Atividades</span>
                </Link>
              </li>
              <li className={isActiveLink("/ajuda") ? "active" : "none"}>
                <Link to="/ajuda">
                  <IoSettings />
                  <span> Ajuda</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <button className="button-logout" onClick={logout}>
            <FiLogOut />
            <span className="logout">Sair</span>
          </button>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li className={isActiveLink("/dashboard") ? "active" : "none"}>
              <Link to="/dashboard">
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </Link>
            </li>
            <li className={isActiveLink("/aulas") ? "active" : "none"}>
              <Link to="/aulas">
                <RiDashboard2Fill />
                <span> Aulas</span>
              </Link>
            </li>
            <li className={isActiveLink("/provas") ? "active" : "none"}>
              <Link to="/provas">
                <FaAddressCard />
                <span> Provas</span>
              </Link>
            </li>
            <li className={isActiveLink("/atividades") ? "active" : "none"}>
              <Link to="/atividades">
                <GiTwirlCenter />
                <span> Atividades</span>
              </Link>
            </li>

            <li className={isActiveLink("/ajuda") ? "active" : "none"}>
              <Link to="/ajuda">
                <IoSettings />
                <span> Ajuda</span>
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #fff;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .logo-smart {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 0 3rem;
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #d9d9d9;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: #000;
          }
        }
        .active {
          background-color: #d9d9d9;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    display: flex;
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
    .button-logout {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #000;
      border: none;
      background-color: transparent;
      font-size: 1rem;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: #000;
        z-index: 99;
        margin-bottom: -10px;
        svg {
          font-size: 1.6rem;
        }
      }
      .logo-smart {
        gap: 1rem;
        justify-content: flex-start;
        padding: 0 2.5rem;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: #ffffff;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.1s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #d9d9d9;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: #000;
        }
      }
      .active {
        background-color: #d9d9d9;
        a {
          color: black;
        }
      }
    }
  }
`;

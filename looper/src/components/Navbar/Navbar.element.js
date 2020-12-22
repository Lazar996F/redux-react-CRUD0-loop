import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  top: 0;
`;
export const NavbarContainer = styled.div`
  display: flex;
  height: 60px;

  @media screen and (max-width: 400px) {
    background-color: blue;
  }
`;

export const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

export const NavIcon = styled.img`
  background-image: url(${(props) => props.src});
  z-index: 99;
  max-width: 150px;
  margin-right: 16px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -20px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-top: 22px;
  font-weight: 600;
  margin-right: 29em;
  @media screen and (min-width: 1900px) {
    margin-right: 56em;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 60px;
    opacity: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    background-color: #fff;
    z-index: 300;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 12px;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2em;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const ClientAccount = styled.img`
  background-image: url(${(props) => props.src});
  z-index: 99;
  max-width: 100px;
  margin-right: 30px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding-bottom: 17px;
  :hover {
    background-color: #4b59f7;
  }
`;

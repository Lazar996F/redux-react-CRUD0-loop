import React from "react";
import styled, { css } from "styled-components";
import ClientDisney from "../images/DisneyLogo.wine.svg";
//import { useSelector } from "react-redux";
import ClientSony from "../images/sonyLogo.png";

const NavSection = styled.p`
  padding-left: 30px;
  background-color: #38454f;
  padding-top: 19px;
  padding-bottom: 19px;
  margin-bottom: 0;
  color: #fff;
`;

const Background = styled.div`
  height: 89px;
  background: rgb(21, 55, 116);
  background: linear-gradient(
    0deg,
    rgba(21, 55, 116, 1) 0%,
    rgba(49, 89, 140, 1) 0%,
    rgba(21, 55, 116, 1) 0%,
    rgba(33, 69, 126, 1) 10%,
    rgba(40, 78, 132, 1) 13%,
    rgba(106, 157, 188, 1) 45%,
    rgba(130, 185, 208, 1) 62%,
    rgba(130, 185, 208, 1) 63%,
    rgba(130, 185, 208, 1) 65%
  );
`;

const Image = styled.img`
  background-image: url(${(props) => props.src});
  margin-bottom: 7px;
  max-width: 130px;
  margin-top: 0px;
  margin-left: 9px;
`;

const Header = () => {
  //const clientName = useSelector((state) => state.clientId.clientId);
  return (
    <>
      <NavSection>App Insights - Disney +</NavSection>
      <Background>
        {/* {clientName == "DISNEY" ? (
          <Image src={ClientDisney} />
        ) : clientName == "SONY" ? (
          <Image src={ClientSony} />
        ) : (
          <Image empty />
        )} */}
        <Image src={ClientDisney} />
      </Background>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import ImgLooper from "../../images/looper-inline.png";
import ImgDisney from "../../images/disney.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
//import { useSelector } from "react-redux";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  ClientAccount,
  Button,
} from "./Navbar.element";
import ClientModal from "../ClientModal";
import { QueryRenderer } from "react-relay";
import environment from "../../Environment";
import graphql from "babel-plugin-relay/macro";

const rootQuery = graphql`
  query NavbarQuery {
    allClients {
      nodes {
        name
      }
    }
  }
`;

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <div></div>;
  }
  //return <div>Loading</div>;
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [showModal, setShowModal] = useState(false);

  const columns = [
    "Dashboard",
    "Pricing & Availability",
    "Artwork",
    "Merchandising",
    "Analytics",
  ];

  //const clientName = useSelector((state) => state.clientId.clientId);
  const NavItems = columns.map((item) => (
    <NavItem>
      <NavLinks to={item.toLowerCase()}>{item}</NavLinks>
    </NavItem>
  ));

  return (
    <Nav>
      <QueryRenderer
        environment={environment}
        query={rootQuery}
        variables={{}}
        render={renderQuery}
      />
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon src={ImgLooper} />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          {NavItems}
        </NavMenu>
        {/* {clientName == "DISNEY" ? (
          <ClientAccount src={ImgDisney} />
        ) : clientName == "SONY" ? (
          <ClientAccount src={ImgSony} />
        ) : ( */}
        <ClientAccount src={ImgDisney} />
        <Button onClick={() => setShowModal(!showModal)}>
          <AiOutlineUser size="1.6em" className="mt-3" />
        </Button>
        <ClientModal show={showModal} setShow={setShowModal} />
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

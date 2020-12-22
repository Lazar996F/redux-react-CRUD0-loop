import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
//import { useDispatch } from "react-redux";
//import { setClientId } from "../actions/clientAction";
import styled from "styled-components";
import Login from "../Containers/Login";
const StyleModal = styled.div`
  padding: 50px;
`;

const ClientModal = (props) => {
  //const dispatch = useDispatch();

  const setClientName = () => {
    // dispatch(setClientId(clientName));
    props.setShow(false);
  };

  const submitUserInfo = (e) => {
    console.log("Forme radi>>>", e);
  };

  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        size="lg"
        centered
      >
        <StyleModal>
          <Login />
        </StyleModal>
      </Modal>
    </div>
  );
};

export default ClientModal;

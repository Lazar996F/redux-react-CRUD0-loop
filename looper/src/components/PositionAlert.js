import React from "react";
import styled, { css } from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import arrowUp from "../images/arrowUp.png";
import arrowDown from "../images/arrowDownRed.png";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRightRed.png";

const Alert = styled.td`
  ${(props) =>
    props.position > 0 &&
    css`
      background: #e3f3e8;
      color: green;
    `}
  ${(props) =>
    props.position < 0 &&
    css`
      background: #f7dce8;
      color: red;
    `}
`;

const ImageArrow = styled.img`
  background-image: url(${(props) => props.src});
  width: 18px;
`;

function PositionAlert(props) {
  return (
    <>
      {/* ***ROW*** */}
      {props.row && props.position != 0 && (
        <Alert row position={props.position} key={props.index}>
          {props.position < 0 ? (
            <Row>
              <Col>
                <ImageArrow src={arrowDown} />
              </Col>
              <Col>{props.position}</Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <ImageArrow src={arrowUp} />
              </Col>
              <Col>
                {"+"}
                {props.position}
              </Col>
            </Row>
          )}
        </Alert>
      )}
      {/* ***COLUMN*** */}
      {props.column && props.position && (
        <Alert row position={props.position} key={props.index}>
          {props.position > 0 ? (
            <Row>
              <Col>
                <ImageArrow src={arrowLeft} />
              </Col>
              <Col>
                {"+"}
                {props.position}
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <ImageArrow src={arrowRight} />
              </Col>
              {props.position != 0 ? (
                <Col>{props.position}</Col>
              ) : (
                <Col>Position did not change</Col>
              )}
            </Row>
          )}
        </Alert>
      )}
    </>
  );
}

export default PositionAlert;

import React from "react";
import styled from "styled-components";

const Title = styled.div`
  position: absolute;
  top: 5px;
  font-size: 9px;
  color: gray;
  margin-left: 11px;
  pointer-events: none;
`;

const Arrow = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0px 5px;
  border-color: #7b7b7b transparent transparent transparent;
`;

const Select = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;

  select {
    font-family: "Arial";
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 9px 11px;
    outline: 0;
    padding-top: 16px;
    border: 1px solid #bebebe;
    border-radius: 5px;
    background: #fff;
    color: rgb(85, 84, 84);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 4px;
  }
  select::-ms-expand {
    display: none;
  }
  select:hover,
  select:focus {
    color: #000000;
    background: linear-gradient(to bottom, #014584, #6a9dbc);
  }
  select:disabled {
    opacity: 0.1;
    pointer-events: none;
  }
  select:hover ~ .select_arrow,
  select:focus ~ .select_arrow {
    border-top-color: #000000;
  }
  select:disabled ~ .select_arrow {
    border-top-color: #cccccc;
  }
`;

function Dropdown(props) {
  const itemOptions = props.items.map((item, index) => (
    <option key={index} value={item.id}>
      {item.value}
    </option>
  ));
  return (
    <Select>
      <select className="test-select" onChange={props.handleSelected}>
        <option selected> </option>
        {itemOptions}
      </select>
      <Arrow />
      <Title>{props.subtitle}</Title>
    </Select>
  );
}

export default Dropdown;

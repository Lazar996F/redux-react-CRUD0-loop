import React from "react";
import styled from "styled-components";

const Th = styled.th`
  padding-right: 15px;
  vertical-align: top;
  border-top: -1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const Thd = styled.thead`
  th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    width: 120px;
    background-color: #eef3f6;
  }
`;

function Thead() {
  const headerItems = [
    "Section",
    "Page Name",
    "Spot Type",
    "Row (old position)",
    "Column(old position)",
    "App/Title",
    "User Path",
    "Screenshot",
  ];
  return (
    <Thd>
      <tr>
        {headerItems.map((item, index) => (
          <Th key={index}>{item}</Th>
        ))}
      </tr>
    </Thd>
  );
}

export default Thead;

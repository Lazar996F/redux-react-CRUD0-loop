import React from "react";
import PositionAlert from "./PositionAlert";
import PopoverScreenshot from "./PopoverScreenshot";
import styled from "styled-components";

const Td = styled.td`
  vertical-align: top;
  border-top: -1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

function Tbody({ items }) {
  return (
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <Td>{item.sectionName}</Td>
          <Td>{item.platformName}</Td>
          <Td>{item.spotType}</Td>
          <PositionAlert row position={item.sectionPosition} />
          <PositionAlert column position={item.spotPosition} />
          <Td>{item.titleType}</Td>
          <Td>
            Path{">"}Second Step{">"}Third Step
          </Td>
          <PopoverScreenshot />
        </tr>
      ))}
    </tbody>
  );
}

export default Tbody;

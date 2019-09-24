import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  min-height: 100vh;
  grid-area: main;
  background: #000;
`;

const main = () => {
  return <StyledMain>MMain</StyledMain>;
};

export default main;

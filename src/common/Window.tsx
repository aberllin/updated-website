import React from "react";
import styled from "styled-components";

type Props = {
  children?: any;
};

export const Window = ({ children }: Props) => {
  return (
    <WindowWrapper>
      <div>{children ? children : "Coming soon..."}</div>
    </WindowWrapper>
  );
};

const WindowWrapper = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
  max-height: 90%;
  height: 100%;
  overflow: auto;
  font-size: 35px;
  color: white;
  background-color: black;
`;

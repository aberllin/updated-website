import React from "react";
import { Window } from "../common/Window";
import styled from "styled-components";

export const Blog = () => {
  document.title = "Aberllin: Blog";
  return (
    <Window>
      <Text>Cooming soon...</Text>
    </Window>
  );
};

const Text = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

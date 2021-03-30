import React from "react";
import styled from "styled-components";

export const Blog = () => {
  document.title = "Aberllin: Blog";
  return <Text>Coming soon...</Text>;
};

const Text = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

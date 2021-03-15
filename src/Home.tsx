import React from "react";
import styled from "styled-components";
import { FooterLinks } from "./FooterLinks";
import { MainContent } from "./MainContent";
import { Navbar } from "./navbar_items/Navbar";

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <MainContent />
      <FooterLinks />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 50px;

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

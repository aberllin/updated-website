import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import { Blog } from "./Blog";
import { Resources } from "./Resources";
import { Portfolio } from "./Portfolio";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Home } from "../Home";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Menu onClick={handleMenuOpen}>
        {!isMenuOpen ? <HiMenu /> : <IoMdClose />}
      </Menu>
      <NavbarWrapper isMenuOpen={isMenuOpen}>
        <StyledLink to='/' onClick={() => setIsMenuOpen(false)}>
          .home()
        </StyledLink>
        <StyledLink to='/portfolio' onClick={() => setIsMenuOpen(false)}>
          .portfolio()
        </StyledLink>
        <StyledLink to='/blog' onClick={() => setIsMenuOpen(false)}>
          .blog()
        </StyledLink>
        <StyledLink to='/resources' onClick={() => setIsMenuOpen(false)}>
          .resources()
        </StyledLink>
      </NavbarWrapper>

      <Switch>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/resources'>
          <Resources />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

const Menu = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 25px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }

  @media screen and (max-width: 400px) {
    top: 5px;
    right: 5px;
  }

  @media screen and (max-width: 400px) {
    top: 5px;
    right: 5px;
  }
`;

const NavbarWrapper = styled.div<{ isMenuOpen: boolean }>`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  line-height: 2;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 40px 50px;
  z-index: 1000;

  @media screen and (max-width: 1024px) {
    padding: 30px 0;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    font-size: 20px;
    position: fixed;
    top: 0;
    box-shadow: 5px 5px 20px;
    transition: all 0.3s ease;

    ${(props) =>
      props.isMenuOpen
        ? `
      background: #1ccbb1;
      left: 0;
      opacity: 1;
      position: absolute;
      transition: all 0.3s ease;
      z-index: 1;
    `
        : `
    opacity: 1;
    top: -100%;
    `}
  }
`;

const StyledLink = styled(Link)`
  padding: 0 20px 0 0;
  transition: all 0.2s ease-in-out;
  position: relative;
  color: white;
  text-decoration: none;

  &:hover {
    color: #1ccbb1;
    

`;

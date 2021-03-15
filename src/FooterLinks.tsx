import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export const FooterLinks = () => {
  return (
    <Wrapper>
      <Link href='https://github.com/aberllin' target='_blank'>
        <AiFillGithub />
      </Link>
      <Link href='https://www.instagram.com/ns.kozluk' target='_blank'>
        <FiInstagram />
      </Link>
      <Link
        href='https://www.linkedin.com/in/anastasia-kozluk-3949301b1/'
        target='_blank'
      >
        <FaLinkedinIn />
      </Link>
      <Link href='https://twitter.com/aberllin1'>
        <AiOutlineTwitter />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;

  @media screen and (max-width: 768px) {
    bottom: 50px;
  }
`;

const Link = styled.a`
  padding: 0 30px;
  font-size: 18pt;
  color: white;
  transition: ease 1s;

  &:hover {
    transform: rotate(180deg);
  }
`;

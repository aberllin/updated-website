import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export const FooterLinks = () => {
  return (
    <Wrapper>
      <Link href='https://github.com/aberllin'>
        <AiFillGithub />
      </Link>
      <Link href='mailto:ns.kozluk@gmail.com'>
        <SiGmail />
      </Link>
      <Link href='https://www.linkedin.com/in/anastasia-kozluk-3949301b1/'>
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
  z-index: -10;

  bottom: 40px;

  @media screen and (max-width: 768px) {
    bottom: 30px;
  }
  @media screen and (max-width: 400px) {
    bottom: 15px;
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

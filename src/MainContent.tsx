import React from "react";
import styled from "styled-components";
import "./button.css";

export const MainContent = () => {
  return (
    <Wrapper>
      <div>
        <H1>
          Hel<AnimatedSpan>lo</AnimatedSpan> W<AnimatedSpan>or</AnimatedSpan>ld!
        </H1>
      </div>
      <SecondBlock>
        <Name>
          const <span style={{ color: "#C95A89" }}>myName</span> ={" "}
          <span style={{ color: "#1ccbb1" }}>'Aberllin'</span>;
        </Name>
        <About>
          I’m a Front-end Developer based in Minsk. I’m new to learning
          programming, but hope I can share with you my way of learning JS +
          React. I’ll share the materials I’ve been using and solutions for the
          problems.
        </About>
        <button className='cv-btn'>Download CV</button>
      </SecondBlock>
    </Wrapper>
  );
};

const About = styled.div`
  padding: 15px 0 15px 60px;

  @media screen and (max-width: 768px) {
    padding: 15px 0;
  }
`;

const SecondBlock = styled.div`
  padding: 35px 0;
  font-size: 25px;
  line-height: 28px;
  border-left: 3px solid #1ccbb1;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    border-left: 0;
  }
`;

const Wrapper = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  width: 73%;

  @media screen and (max-width: 1024px) {
    width: 91%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const Name = styled.div`
  padding-top: 0;
  font-weight: bold;
  font-size: 30px;
  line-height: 34px;
  padding: 15px 0 15px 60px;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 29px;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 24px;
    padding: 0;
  }
`;

const H1 = styled.div`
  font-size: 70pt;
  line-height: 90px;
  font-weight: bold;
  padding-right: 50px;
  animation: text-flicker 4s infinite;

  @media screen and (max-width: 1024px) {
    font-size: 50pt;
    line-height: 65px;
  }

  @media screen and (max-width: 768px) {
    font-size: 50pt;
    line-height: 45px;
    padding: 35px 0 30px 0;
  }

  @keyframes text-flicker {
    0% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    2% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    /* 8% {
      opacity:0.1;
      text-shadow: 0px 0px 29px #1CCBB1;
    } */
    9% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    /* 12% {
      opacity:0.1;
      text-shadow: 0px 0px #1CCBB1;
    } */
    20% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    25% {
      opacity: 0.3;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    30% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    60% {
      opacity: 0.7;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    72% {
      opacity: 0.2;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    77% {
      opacity: 0.9;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    100% {
      opacity: 0.9;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
  }
`;

const AnimatedSpan = styled.span`
  animation: letter-flicker 2s linear infinite;

  @keyframes letter-flicker {
    0% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    2% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    4% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    19% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    21% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    23% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    80% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    83% {
      opacity: 0.4;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    87% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
  }
`;

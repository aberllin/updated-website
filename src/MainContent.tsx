import React from "react";
import styled from "styled-components";
import "./button.css";

export const MainContent = () => {
  return (
    <Wrapper>
      <H1>
        Hel<AnimatedSpan>lo</AnimatedSpan> W<AnimatedSpan>or</AnimatedSpan>ld!
      </H1>
      <SecondBlock>
        <Name>
          const <span style={{ color: "#C95A89" }}>myName</span> ={" "}
          <span style={{ color: "#1ccbb1" }}>'Aberllin'</span>;
        </Name>
        <About>
          I'm looking for a job as a frontend developer. I want to be a part of
          nice company and get commercial experience. My goal is to improve my
          skills and get new as well. Currently working with React (TypeScript).
          Look at my CV by clicking the button below. Read my blog and grab
          resources that I had been used on my way to becoming developer.
        </About>
        <button className='cv-btn'>
          <a href='/CV.pdf' target='_blank'>
            Download CV
          </a>
        </button>
      </SecondBlock>
    </Wrapper>
  );
};

const About = styled.div`
  padding: 15px 0 20px 60px;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 768px) {
    padding: 15px 0;
  }

  @media screen and (max-width: 768px) {
    line-height: 1;
    padding: 15px 10px;
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

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
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
  width: 78%;

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

  @media screen and (max-width: 320px) {
    font-size: 16px;
    line-height: 20px;
    padding: 0;
  }
`;

const H1 = styled.div`
  font-size: 70pt;
  line-height: 90px;
  font-weight: bold;
  padding-right: 50px;
  z-index: -10;
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

  @media screen and (max-width: 400px) {
    font-size: 35pt;
    line-height: 35px;
    padding: 35px 10px 20px 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 30pt;
    line-height: 35px;
    padding: 20px 10px 15px 10px;
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

import React from "react";
import styled from "styled-components";
import { Window } from "../common/Window";

type portfolioTypes = {
  title: string;
  image: string;
  demoLink: string;
  githubLink: string;
  alt: string;
  description: JSX.Element;
}[];

const portfolioData: portfolioTypes = [
  {
    title: "MacOS-like Desktop on the web 🖥️",
    image: "/images/desktop.png",
    demoLink: "https://apps-dashboard.netlify.app/",
    githubLink: "https://github.com/aberllin/react-apps-dashboard",
    alt: "image of macOs-like desktop",
    description: (
      <div>
        <p>
          It's a replica of the desktop and window management experience in
          macOS. There is a working dock; windows can be opened from the dock,
          moved around, resized, maximized, and minimized.
        </p>
        <div>There are two working applications:</div>
        <br />
        <div>
          - Todo App, where you can write down your todos, edit them, delete or
          mark as DONE. They are stores at local storage.
        </div>
        <div>
          - GitHub Search app, which is an app to find user by login, allows
          adding to Favorite list.
        </div>
      </div>
    ),
  },
];

export const Portfolio = () => {
  return (
    <Window>
      {portfolioData.map(
        ({ title, image, description, alt, demoLink, githubLink }) => {
          return (
            <Wrapper>
              <InfoWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </InfoWrapper>
              <ProjectWrapper>
                <Links>
                  <Link href={demoLink}>Demo</Link>
                  <Link href={githubLink}>GitHub</Link>
                </Links>
                <Image src={image} alt={alt} />
              </ProjectWrapper>
            </Wrapper>
          );
        }
      )}
    </Window>
  );
};

const Link = styled.a`
  color: white;
  transition: ease 0.2s;
  padding: 10px;

  &:hover {
    color: #1ccbb1;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 45px;
  border-left: 3px solid #1ccbb1;
  animation-name: fadeInFromNone;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

}

`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 460px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  max-width: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding-top: 100px;
  font-family: "Raleway", sans-serif;
`;

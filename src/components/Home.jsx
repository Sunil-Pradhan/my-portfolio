// Import Library
import React from 'react';
import styled from 'styled-components';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

// Import Components
import { Mark } from './TextHighlight';
import { H1, H2 } from './Heading';

// CSS-in-JS
const MainWrapper = styled.section`
  max-width: 100%;
  padding: 5vh 10vw;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0vh 8vw;
  }
`;

const Text = styled.p`
  font-size: 2.5rem;
  line-height: 1.4;
  color: #121314;
  font-weight: 300;
  max-width: 70rem;

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 31rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const LogoHoverEffect = styled.div`
  cursor: pointer;
  color: #464647;

  &:hover {
    transform: scale(1.1);
    transition: transform color 0.3s ease-in-out;
    color: #121314;
  }
`;

const Home = () => {
  return (
    <>
      <MainWrapper>
        <H1>Hello.</H1>
        <H2>My name is Sunil Pradhan.</H2>
        <Text>
          I am a passionate Front-End Developer based in Bangalore, India. With
          a strong proficiency in <Mark>JavaScript</Mark> and deep expertise in
          {''} {''}
          <Mark>React</Mark> and its ecosystem, I bring dynamic, user-friendly
          web applications to life.
        </Text>
        <Text>
          Over the years, I've honed my skills in creating seamless, responsive
          interfaces that not only meet the technical requirements but also
          provide an exceptional user experience. My journey in web development
          has been driven by a commitment to staying at the forefront of
          technology and continuously learning new tools and techniques to
          enhance my craft.
        </Text>
        <Text>
          Living in the tech hub of Bangalore has provided me with numerous
          opportunities to work on exciting projects and collaborate with
          talented professionals. My career has spanned across various
          industries, allowing me to adapt and apply my skills to different
          contexts and challenges.
        </Text>
        <Text>
          I thrive in environments that encourage creativity and innovation, and
          I am always on the lookout for new challenges that can push my
          boundaries. My goal is to contribute to projects that make a
          meaningful impact while continuously evolving as a developer.
        </Text>
        <Text>
          In addition to my front-end development expertise, I am deeply
          intrigued by the potential of artificial intelligence, particularly
          generative AI. This interest has led me to explore how AI can be
          integrated into web applications to create smarter, more adaptive user
          experiences. From chatbots and recommendation systems to AI-driven
          design tools, I am committed to harnessing the power of AI to push the
          boundaries of what's possible in web development.
        </Text>
        <Text>
          When I’m not coding, you can find me exploring the vibrant city of
          Bangalore, attending tech meetups, or experimenting with new
          technologies and frameworks.
        </Text>
        <Text>
          Feel free to reach out to me for collaboration or just to chat about
          the latest trends in front-end development and AI!
        </Text>
        <hr />

        <Text>Thank you for visiting my portfolio!</Text>
        <LogoWrapper>
          <a
            href="https://github.com/Sunil-Pradhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoHoverEffect>
              <GithubLogo size={32} weight="fill" />
            </LogoHoverEffect>
          </a>
          <a
            href="https://www.linkedin.com/in/itsSunilPradhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoHoverEffect>
              <LinkedinLogo size={32} weight="fill" />
            </LogoHoverEffect>
          </a>
        </LogoWrapper>
      </MainWrapper>
    </>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';
import headerIllustration from '../assets/illustration1.svg';
import info from './Info'

const Home = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>Fast, Easy, and Effective</HeaderTitle>
        <HeaderParagraph>Easy multimedia editing and conversion using FFmpeg engine.</HeaderParagraph>
        <HeaderButtons>
          <GetStartedButton>Get Started</GetStartedButton>
          <MoreSelectionButton>More Information</MoreSelectionButton>
        </HeaderButtons>
      </HeaderContent>
      <HeaderIllustration />
    </HeaderContainer>
    
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center ;
  justify-content: space-between;
  height: 100vh;
  margin: -5.5rem 10vw;
  z-index: 1;
  @media screen and (max-width: 800px) {
    margin: 0rem 10vw;
  }
`;

const HeaderIllustration = styled.div`
  width: 80vw;
  height: 100vh;
  background-image: url(${headerIllustration});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media screen and (max-width: 800px) {
    display: none;
    transition: all 0.3s ease-in-out;
  }
`;

const HeaderContent = styled.div`
  width: 100vw;
  text-align: left;
  color: #fff;
  margin-right: 5rem;
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    margin-right: 0;
    transition: all 0.3s ease-in-out;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.3rem;`;

const HeaderParagraph = styled.p`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
`;

const HeaderButtons = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
      
  }
`;

const GetStartedButton = styled.button`
  background: linear-gradient(135deg, #ff9800, #ff6000);
  color: #fff;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;    
    margin-right: 0rem;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    margin-right: 2rem;
  }
`;

const MoreSelectionButton = styled.button`
  border: 1px solid #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;    
    margin-right: 0rem;color: black;
    border: 1px solid black;
  }
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    border: transparent;
  }
`;

export default Home;

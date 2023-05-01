import React from 'react';
import styled from 'styled-components';
import headerIllustration from '../assets/illustration2.svg';
import devider from '../assets/line.svg';


const Info = () => {
  return (
    <HeaderContainer>
    <HeaderIllustration />
      <HeaderContent>
        <HeaderTitle>WHY RevideoX</HeaderTitle>
        <img src={devider}alt="" />
        <HeaderParagraph>RevideoX is the ultimate multimedia editing and conversion app. With a simple interface and powerful FFmpeg engine, it's the perfect tool for all your video, audio, and image needs.</HeaderParagraph>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center ;
  justify-content: space-between;
  height: 100vh;
  margin: 0rem 2vw;
  margin-left: 10vw;
  margin-top: 5vw;
`;

const HeaderIllustration = styled.div`
  width: 80vw;
  height: 100vh;
  background-image: url(${headerIllustration});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 10rem;
  @media screen and (max-width: 800px) {
    display: none;
    transition: all 0.3s ease-in-out;
  }
`;

const HeaderContent = styled.div`
  width: 100vw;
  text-align: left;

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
  margin-bottom: 0rem;
`;

const HeaderParagraph = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
`;
;

export default Info;
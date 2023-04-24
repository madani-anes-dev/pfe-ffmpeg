import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Definition = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

function About() {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Definition>
        Our web app is a powerful tool for converting and editing audio, video,
        and image files. We use the ffmpeg library to provide advanced features
        and functionality to our users.
      </Definition>
      <PhotosContainer>
        <Photo
          src="https://via.placeholder.com/200x200.png?text=Photo+1"
          alt="Photo 1"
        />
        <Photo
          src="https://via.placeholder.com/200x200.png?text=Photo+2"
          alt="Photo 2"
        />
        <Photo
          src="https://via.placeholder.com/200x200.png?text=Photo+3"
          alt="Photo 3"
        />
      </PhotosContainer>
    </AboutContainer>
  );
}

export default About;

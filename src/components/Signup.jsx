import React from "react";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #333333;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #333333;
    border: 2px solid #333333;
  }
`;

function Signup() {
  return (
    <SignupContainer>
      <SignupForm>
        <Title>Sign Up</Title>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </SignupForm>
    </SignupContainer>
  );
}

export default Signup;

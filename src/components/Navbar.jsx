import React, { useState } from "react";
import logo from "../assets/logo.svg";
import github from "../assets/github.svg";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Height } from "@mui/icons-material";

const NavbarContainer = styled.nav`
  display: flex;
  margin-top: 1.2rem;
  margin-bottom: 0.7rem;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-right: 8rem;
  z-index: 10;
  @media screen and (max-width: 800px) {
    margin-right: 1rem;
  }
`;

const Logo = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-left: 2rem;

  @media screen and (max-width: 800px) {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    transition-delay: 0.1s;
    transition-duration: 0.3s;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 9999;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 80px;
    right: ${({ open }) => open ? '0' : '-100vw'};
    background-color: #333;
    height: calc(100vh - 80px);
    width: 100vw;
    transition: all 0.3s ease-in-out;
  }
`;

const ListItem = styled.li`
  margin-left: 10px;

  @media screen and (max-width: 800px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    height: 25px;
    margin-right: 5px;
  }
  &:hover {
    background-color: #333333;
    color: #ffffff;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border: 1px solid #ffffff;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    z-index: 2;
    color: #fff;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px auto; /* add spacing between lines and center them */
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }

  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo src={logo} alt="logo" />
      <Hamburger onClick={() => setOpen(!open)}>
        <Line open={open} />
        <Line open={open} />
        <Line open={open} />
      </Hamburger>
      <List open={open}>
        <ListItem>
          <NavLinkStyled exact to="/">
            Home
          </NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/about">
            About
          </NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/contact">
            Contact
          </NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="https://github.com/madani-anes-dev/pfe-ffmpeg">
            <img src={github} alt="github" />
            Github
          </NavLinkStyled>
        </ListItem>
      </List>
    </NavbarContainer>
  );
}
export default Navbar;
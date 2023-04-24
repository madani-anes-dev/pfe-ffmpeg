import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { NavLink } from 'react-router-dom'


const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 20px;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-left: 10px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <List>
        <ListItem>
        <NavLinkStyled to="/" >Home</NavLinkStyled>
        </ListItem>
        <ListItem>
        <NavLinkStyled to="/about">About</NavLinkStyled>
        </ListItem>
        <ListItem>
        <NavLinkStyled to="/Signin" >Sign in</NavLinkStyled>
        </ListItem>
        <ListItem>
        <NavLinkStyled to="/Signup">Sign up</NavLinkStyled>
        </ListItem>
        <ListItem>
        <NavLinkStyled to="/Contact">Contact</NavLinkStyled>
        </ListItem>
      </List>
    </NavbarContainer>
  );
}

export default Navbar;

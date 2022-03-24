import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Slink to="/">
        Tasty<span>Af</span>
      </Slink>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
position:fixed;
top:0;
left:0;
margin-bottom:1rem;
backdrop-filter:blur(5px);
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  padding: .8rem;
  padding-left:14rem;
  font-family: "Kaushan Script", sans-serif;
  background-color: #0a0a0ab0;
  filter: drop-shadow(0 0.2rem 0.2rem hsl(0, 0%, 0%));
  z-index:10;

  span {
      padding-right:1rem;
    background: linear-gradient(to right, #4776e6, #8e54e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Kaushan Script", sans-serif;
`;

const Slink = styled(NavLink)`
  text-decoration: none;
  font-family: "Kaushan Script", sans-serif;
`;

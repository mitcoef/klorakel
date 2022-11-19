import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Bar = styled.nav`
  font-size: 18px;
  background-image: linear-gradient(
    260deg,
    rgb(42, 244, 152, 255) 0%,
    #3498db 100%
  );
`;
const NavLi = styled.text`
  padding: 10px;
  &:hover {
    color: black;
    background-color: rgba(255, 255, 255, 0.5);
  }
  border-radius: 15px;
`;
const Container = styled.nav`
  display: flex;
  align: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`;
export default function Navbar() {
  return (
    <Bar>
      <Container>
        <Link href="/">
          <NavLi>KloFinder</NavLi>
        </Link>
        <Link href="/heatmap">
          <NavLi>KloHeatmap</NavLi>
        </Link>
        <Link href="/suggest">
          <NavLi>KloSuggester</NavLi>
        </Link>
      </Container>
    </Bar>

  );
}
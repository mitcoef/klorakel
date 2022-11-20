import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from 'next/router'
import styles from "../styles/Home.module.css";

const Bar = styled.nav`
  font-size: 18px;
  background-image: linear-gradient(
    260deg,
    #0088CC 0%,
    #14B8A2 100%
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
const NavLi2 = styled.text`
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
  padding: 10px;
`;
export default function Navbar() {
  // var startpage = true;
  const router = useRouter()
  // const deactivate = {
  //   marginRight: 10,
  //   background-color: black,
  // }

  return (
    <Bar>
      <Container>
        <Link href="/" className={router.pathname == "/" ? styles.active : ""}>
          <NavLi >KloFinder</NavLi>
        </Link>
        <Link href="/heatmap" className={router.pathname == "/heatmap" ? styles.active : ""}>
          <NavLi2 >KloCluster</NavLi2>
        </Link>
      </Container>
    </Bar>

  );
}
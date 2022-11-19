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

    // <nav className="flex items-center flex-wrap bg-green-300 p-3 ">
    //   <Bar>
    //   <NavUl>
    //     <Link href="/">
    //       <NavLi>KloFinder</NavLi>
    //     </Link>
    //     <Link href="/heatmap">
    //       <NavLi>KloHeatmap</NavLi>
    //     </Link>
    //     <Link href="/suggest">
    //       <NavLi>KloSuggester</NavLi>
    //     </Link>
    //   </NavUl>
    //   </Bar>
    // </nav>
  );
}

// import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";

// /*
//  * This is a ready to use component, just import it and plop it into your project as:
//  * <Navbar/>
//  * You might want to move all the style components into separate files for readability
//  * if you plan to do more with it.
//  */

// const NavItem = styled.li`
//   display: inline-block;
// `;

// const NavLink = styled.a`
//   list-style-type: none;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 768px) {
//     margin: 0px 10px;
//   }
// `;

// const Bar = styled.nav`
//   font-size: 18px;
//   background-image: linear-gradient(
//     260deg,
//     rgb(42, 244, 152, 255) 0%,
//     #3498db 100%
//   );
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   padding-bottom: 10px;
//   @media (min-width: 768px) {
//     display: flex;
//     justify-content: space-between;
//     padding-bottom: 0;
//     height: 70px;
//     align-items: center;
//   }
// `;

// // const MainNav = styled.ul`
// //   list-style-type: none;
// //   display: ${(props) => props.display};
// //   flex-direction: column;
// //   @media (min-width: 768px) {
// //     display: flex !important;
// //     margin-right: 30px;
// //     flex-direction: row;
// //     justify-content: flex-end;
// //   }
// // `;

// export default function NavBar() {
//   return (
//     // <Bar>
//     //   <MainNav>
//     //     <NavItem>
//     //       <NavLink href="/finder">KloFinder</NavLink>
//     //     </NavItem>
//     //     <NavItem>
//     //       <NavLink href="/heatmap">KloHeatmap</NavLink>
//     //     </NavItem>
//     //     <NavItem>
//     //       <NavLink href="/suggest">KloSuggester</NavLink>
//     //     </NavItem>
//     //   </MainNav>
//     // </Bar>
//     <NavItem>KloFinder</NavItem>
//   );
// }

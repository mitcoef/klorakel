import React from "react";
import Link from "next/link";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  background-image: linear-gradient(260deg, #0088cc 0%, #14b8a2 100%);
  &:hover {
    color: #eae8ff;
    background-image: none;
    background-color: #696773;
  }
  border-radius: 15px;
  margin: 10px;
`;

//layout wrapper
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


//map goes in here
export const MapCont = styled.div`
  height: 30rem;
  display: flex;
  align: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  align-content: center;
  width: 80%;
  flex-grow: 4;
`;

//map container + other stuff goes in here
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;
import React, { Fragment } from "react";
import styled from "styled-components";
import Component from "./Component";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function App() {
  return (
    <>
      <Title>Hello, React</Title>
      <Component />
    </>
  );
}

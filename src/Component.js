import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Button = styled.button`
  width: 100px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function Component() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(0)}>reset</Button>
      <Button primary onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </Wrapper>
  );
}

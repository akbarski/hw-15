import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { count, incrementHandler, decrementHandler, resetHandler } =
    useCounter(4, 2);

  return (
    <Container>
      <h1>{count}</h1>
      <Button variant="outlined" color="inherit" onClick={incrementHandler}>
        increment
      </Button>
      <Button variant="outlined" color="inherit" onClick={decrementHandler}>
        decrement
      </Button>
      <Button variant="outlined" color="error" onClick={resetHandler}>
        reset
      </Button>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  text-align: center;
`;

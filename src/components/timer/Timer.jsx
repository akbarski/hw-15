import { Button, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import useTimer from "../../hooks/useTimer";

const Timer = () => {
  const { value, onChange } = useInput(1);

  const { timer, startTimerHandler, stopTimerHandler, restartTimer } =
    useTimer(value);

  return (
    <Container>
      <h1>{timer}</h1>
      <ButtonContainer>
        <Button variant="outlined" color="primary" onClick={startTimerHandler}>
          Start
        </Button>
        <Button variant="outlined" color="secondary" onClick={stopTimerHandler}>
          Stop
        </Button>
        <Button variant="outlined" color="error" onClick={restartTimer}>
          Restart
        </Button>
      </ButtonContainer>
      <TextField
        size="small"
        variant="outlined"
        type="number"
        min={1}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

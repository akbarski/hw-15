import { Button, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

const Input = () => {
  const email = useInput("", "email");
  const password = useInput("", "password");
  const date = useInput("", "date");

  return (
    <Container>
      <InputContainer>
        <label htmlFor="email">Email</label>
        <TextField
          size="small"
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.validate}
        />
        <Button variant="outlined" color="success" onClick={email.validate}>
          submit
        </Button>
        {email.error && <Error>{email.error}</Error>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <TextField
          size="small"
          type="password"
          id="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.validate}
        />
        <Button variant="outlined" color="success" onClick={password.validate}>
          submit
        </Button>
        {email.error && <Error>{password.error}</Error>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="date">Date</label>
        <TextField
          size="small"
          type="date"
          id="date"
          value={date.value}
          onChange={date.onChange}
          onBlur={date.validate}
        />
        <Button variant="outlined" color="success" onClick={date.validate}>
          submit
        </Button>
        {email.error && <Error>{date.error}</Error>}
      </InputContainer>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: grid;
  gap: 15px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 450px 100px 450px;
  justify-content: center;
  gap: 20px;
`;

const Error = styled.span`
  color: red;
`;

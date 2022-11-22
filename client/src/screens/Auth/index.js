import React from "react";
import {
  Container,
  ButtonContainer,
  InputContainer,
  Title,
  ButtonText,
  Text,
} from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signup, login } from "../../feature/Auth/auth-thunk";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // const history = useHistory();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (isSignup) {
      dispatch(signup(form));
    } else {
      dispatch(login(form));
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container>
      <Title>Sport Manager</Title>

      <InputContainer>
        {isSignup && (
          <>
            <Input
              name="firstName"
              label="First Name"
              onChange={handleChange}
              autoFocus
              half
            />
            <Input
              name="lastName"
              label="Last Name"
              onChange={handleChange}
              half
            />
          </>
        )}
        <Input name="email" label="E-mail" onChange={handleChange} />
        <Input
          name="password"
          label="Password"
          onChange={handleChange}
        />
        {isSignup && (
          <Input
            name="confirmPassword"
            label="Confirm Password"
            onChange={handleChange}
            autoFocus
            half
          />
        )}
      </InputContainer>
      <ButtonContainer>
        <Button label="Login" onClick={handleSubmit} />
        {/* <Button label="Signup" variant="outlined" /> */}
        <ButtonText variant="white-secondary" onClick={switchMode}>
          <Text>
            {isSignup ? "Already have an account?" : "Don't have an account? "}
            <Text active>{isSignup ? "Sign in" : "Sign Up"}</Text>
          </Text>
        </ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default Auth;

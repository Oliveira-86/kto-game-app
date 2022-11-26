import React from "react";
import {
  Container,
  ButtonContainer,
  InputContainer,
  Title,
  ButtonText,
  Text,
  Centered,
} from "./styles";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  const [user, setUser] = useState(false);

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        const response = await dispatch(signup(form));

        toast.error(response.payload.data.message, {
          theme: "dark",
        });
      } else {
        const response = await dispatch(login(form));

        if (response?.payload?.token) {
          setUser(response?.payload);
          return;
        }

        if (response?.payload?.response?.data?.message) {
          toast.error(response?.payload?.response?.data?.message, {
            theme: "dark",
          });
          return;
        }

        toast.error(
          response?.payload?.message
            ? response?.payload?.message
            : "Something went wrong.",
          {
            theme: "dark",
          }
        );
      }
    } catch (error) {
      toast.error("Something went wrong.", {
        theme: "dark",
      });
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container>
      <Title>Sport Manager</Title>

      <Centered>
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
            type="password"
            name="password"
            label="Password"
            onChange={handleChange}
          />
          {isSignup && (
            <Input
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              onChange={handleChange}
              autoFocus
              half
            />
          )}
        </InputContainer>
        <ButtonContainer>
          <Button label="Login" onClick={handleSubmit} isLoading={loading} />
          <ButtonText variant="white-secondary" onClick={switchMode}>
            <Text>
              {isSignup
                ? "Already have an account?"
                : "Don't have an account? "}
              <Text active>{isSignup ? "Sign in" : "Sign Up"}</Text>
            </Text>
          </ButtonText>
        </ButtonContainer>
      </Centered>
      {user && <Navigate to="/home" state={user} replace={true} />}
    </Container>
  );
};

export default Auth;

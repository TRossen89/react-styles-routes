import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../services/apiFacade.js";
import { getUserWithRolesFromToken } from "../services/getUserInfoFromToken.js";

const LoginPage = styled.div`
  display: flex;
  justify-content: center;

  border: solid red;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 8vw;

  border: solid blue;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.4vw;

  border: solid lightblue;
`;

const Input = styled.input`
  width: 20vw;
  height: 3vw;

  margin-top: 1.2vw;
`;

const LoginButton = styled.button`
  width: 6vw;
  height: 1.8vw;

  margin-top: 2vw;
`;

function Login({ setIsLoggedIn, setLoggedInUser }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (event) => {

    event.preventDefault();

    try {
    
      const token = await login(username, password);

      if (token) {
        const userDetails = getUserWithRolesFromToken(token);
        setIsLoggedIn(true);
        setLoggedInUser(userDetails);
        console.log('Login successful:', userDetails);
        navigate('/home');

      } else {
        console.log("Login failed. Check credentials");
      }
    } catch (err) {
      console.log("Some error happened. The error: " + err);
    }
    
  };

  return (
    <>
      <LoginPage>
        <LoginContainer>
          <h1>Login</h1>
          <Form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton type="submit">Login</LoginButton>
          </Form>
        </LoginContainer>
      </LoginPage>
    </>
  );
}

export default Login;

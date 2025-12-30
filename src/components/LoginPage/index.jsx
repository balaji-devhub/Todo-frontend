import React from 'react'
import {
  LoginPageContainer,
  LoginButton,
  LoginCardContainer,
  Title,
  Label,
  InputContainer,
  ButtonWrapper
} from './loginStyle'

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginCardContainer>
        <Title>Login </Title>
        <>
          <Label htmlFor="username">Username</Label>
          <InputContainer id="username" placeholder="Enter the username"></InputContainer>
          <Label htmlFor="password">Password</Label>
          <InputContainer id="password" placeholder="Enter the Password"></InputContainer>
          <ButtonWrapper>
            <LoginButton>Login</LoginButton>
          </ButtonWrapper>
        </>
      </LoginCardContainer>
    </LoginPageContainer>
  )
}

export default LoginPage

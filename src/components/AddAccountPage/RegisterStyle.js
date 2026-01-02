import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

// Simple and good entrance animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
export const LogContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Preventer = styled(Link)`
  text-align: left;
  cursor: pointer;
  color: #000;
`

export const RegisterPageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Use height 100vh with hidden overflow to prevent scrollbars */
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  padding: 16px;
  margin: 0;
  overflow: hidden;
  /* Applied requested letter-spacing to the whole container */
  letter-spacing: 1.5px;
`

export const RegisterCardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  padding: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.06);

  /* Animation applied here */
  animation: ${fadeInUp} 0.6s ease-out forwards;

  @media (max-width: 768px) {
    padding: 30px;
  }
`

export const Title = styled.h1`
  font-family: 'Google Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-top: 0;
  margin-bottom: 32px;
  text-align: left;
  letter-spacing: 0.5px; /* Reduced slightly for better title readability */
`

export const Label = styled.label`
  font-family: 'Google Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #555555;
  margin-bottom: 8px;
  display: block;
  text-transform: uppercase;
  /* Label keeps your 1.5px spacing from the container */
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  letter-spacing: 1.5px;
  border: 1px solid #e8e8e8;
  background-color: #fafafa;
  margin-bottom: 24px;
  font-size: 16px; /* 16px prevents mobile zoom */
  outline: none;
  color: #1a1a1a;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #b0b0b0;
    letter-spacing: 1.5px;
  }

  /* Focus: Removed the color/heavy shadow for a cleaner look */
  &:focus {
    background-color: #ffffff;
    border-color: #000000;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`

export const RegisterButton = styled.button`
  padding: 12px 32px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1.5px;

  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

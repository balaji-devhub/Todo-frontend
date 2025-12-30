import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.7px;
  /* FIXED: min-height allows the page to grow if content is taller than the screen */
  height: 100vh;
  width: 100%;

  background-color: #f9f9f9;
  padding: 40px 16px; /* Added more vertical padding for scroll breathing room */
  margin: 0;

  /* Ensures vertical scrolling is possible on small screens */
  overflow-y: auto;
`

export const LoginCardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px; /* Adjusted to a sweet spot between 400 and 600 */
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05), 0px 10px 40px rgba(0, 0, 0, 0.08);

  /* Responsive Width */
  @media (min-width: 769px) {
    width: 40%;
  }
`

export const Title = styled.h1`
  font-family: 'Google Sans', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #111111;
  margin-top: 0;
  margin-bottom: 24px;
  text-align: left;
  letter-spacing: 1.3px; /* Reduced for better title readability */
`

export const Label = styled.label`
  font-family: 'Google Sans', sans-serif;
  font-weight: 500;
  color: #444444;
  font-size: 13px;
  margin-bottom: 6px;
  display: block;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

export const InputContainer = styled.input`
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  outline: none;
  margin-bottom: 24px;
  font-size: 16px;
  letter-spacing: 1.7px;
  color: #1a1a1a;

  /* Focus State - Clean & Minimal */
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #aaa;
  }

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

export const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #222;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 480px) {
    width: auto;
    padding: 12px 32px;
  }
`

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { InfinitySpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import {
  LoginPageContainer,
  LoginButton,
  LoginCardContainer,
  Title,
  Label,
  InputContainer,
  Error,
  ButtonWrapper
} from './loginStyle'

const LoginPage = () => {
  const navigate = useNavigate()
  const [useremail, setuseremail] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [username, setusername] = useState('')

  // Ensure user is redirected if already logged in
  useEffect(() => {
    const token = Cookies.get('jwt_token')
    if (token) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const loginSuccess = token => {
    setError('')
    // Ensure 'token' is not undefined before setting
    if (token) {
      Cookies.set('jwt_token', token, { expires: 7 })
      navigate('/', { replace: true })
    } else {
      setError('Server Error')
    }
  }

  const userVerification = async event => {
    event.preventDefault() // Prevent page reload

    if (!useremail || !password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')

    const userDetails = {
      username,
      useremail,
      password
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDetails)
    }

    try {
      const url = 'https://todo-backend-4-v3q0.onrender.com/user/login'
      const response = await fetch(url, options)
      const data = await response.json()

      console.log('Login Response Data:', data)

      if (response.ok) {
        // IMPORTANT: Verify if your backend sends 'jwtToken', 'jwt_token', or 'token'
        const token = data.jwtToken || data.jwt_token || data.token
        loginSuccess(token)
      } else {
        setError(data.message || 'Login Failed')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      console.error('Login Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoginPageContainer>
      <LoginCardContainer as="form" onSubmit={userVerification}>
        <Title>Login</Title>

        <Label htmlFor="useremail">User email</Label>
        <InputContainer
          id="useremail"
          type="email"
          value={useremail}
          placeholder="Enter the email"
          onChange={e => setuseremail(e.target.value)}
        />

        <Label htmlFor="username">User name</Label>
        <InputContainer
          id="username"
          type="text"
          value={username}
          placeholder="Enter the username"
          onChange={e => setusername(e.target.value)}
        />

        <Label htmlFor="password">Password</Label>
        <InputContainer
          id="password"
          type="password" // Hidden characters
          value={password}
          placeholder="Enter the Password"
          onChange={e => setpassword(e.target.value)}
        />

        <ButtonWrapper>
          {loading ? (
            <InfinitySpin width="120" color="#000" />
          ) : (
            <LoginButton type="submit">Login</LoginButton>
          )}
        </ButtonWrapper>

        {error && <Error>{error}</Error>}
      </LoginCardContainer>
    </LoginPageContainer>
  )
}

export default LoginPage

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'

import {
  RegisterPageContainer,
  RegisterCardContainer,
  Title,
  Label,
  Input,
  Preventer,
  ButtonWrapper,
  RegisterButton,
  LogContainer
} from './RegisterStyle'

const API_URL = 'todo-backend-production-0a9b.up.railway.app/user/register'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRegisterClick = async () => {
    if (loading) return

    // 1. Check if all fields are filled
    if (!formData.username || !formData.useremail || !formData.password) {
      setError('Please fill in all fields.')
      return
    }

    // 2. PASSWORD VALIDATION: Must be greater than 8 characters
    if (formData.password.length <= 8) {
      setError('Password must be greater than 8 characters.')
      return
    }

    setError('')
    setLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed.')
      }

      alert('Registration Successful!')
      navigate('/user/login')
    } catch (err) {
      setError(err.message || 'Server error. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <RegisterPageContainer>
      <RegisterCardContainer>
        <Title>Register</Title>

        <Label htmlFor="username">USERNAME</Label>
        <Input
          id="username"
          type="text"
          name="username"
          placeholder="Enter the username"
          value={formData.username}
          onChange={handleChange}
          disabled={loading}
        />

        <Label htmlFor="email">EMAIL</Label>
        <Input
          id="email"
          type="email"
          name="useremail"
          placeholder="Enter the email"
          value={formData.useremail}
          onChange={handleChange}
          disabled={loading}
        />

        <Label htmlFor="password">PASSWORD</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter the password (min 9 chars)"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
        />

        {error && (
          <p style={{ color: '#ff4d4d', fontSize: '14px', marginTop: '10px', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <ButtonWrapper>
          {loading ? (
            <InfinitySpin width="120" color="#4A90E2" />
          ) : (
            <LogContainer>
              <Preventer to="/user/login">Have account?</Preventer>
              <RegisterButton type="button" onClick={handleRegisterClick}>
                Register
              </RegisterButton>
            </LogContainer>
          )}
        </ButtonWrapper>
      </RegisterCardContainer>
    </RegisterPageContainer>
  )
}

export default Register

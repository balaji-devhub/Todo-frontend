import { useState } from 'react'

import {
  RegisterPageContainer,
  RegisterCardContainer,
  Title,
  Label,
  Input,
  ButtonWrapper,
  RegisterButton
} from './RegisterStyle'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    password: ''
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <RegisterPageContainer>
      <RegisterCardContainer>
        <Title>Register</Title>

        <form onSubmit={handleSubmit}>
          <Label>USERNAME</Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter the username"
            value={formData.username}
            onChange={handleChange}
          />

          <Label>EMAIL</Label>
          <Input
            type="email"
            name="useremail"
            placeholder="Enter the email"
            value={formData.useremail}
            onChange={handleChange}
          />

          <Label>PASSWORD</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter the password"
            value={formData.password}
            onChange={handleChange}
          />

          <ButtonWrapper>
            <RegisterButton type="submit">Register</RegisterButton>
          </ButtonWrapper>
        </form>
      </RegisterCardContainer>
    </RegisterPageContainer>
  )
}

export default Register

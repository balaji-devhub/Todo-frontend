import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Protectrouter = ({ children }) => {
  const token = Cookies.get('jwt_token')

  if (!token) {
    // ❌ Not logged in → redirect to login
    return <Navigate to="/user/login" replace />
  }

  // ✅ Logged in → allow access
  return children
}

export default Protectrouter

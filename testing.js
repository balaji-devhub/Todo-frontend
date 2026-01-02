const getUserTodo = async () => {
  setLoading(true)
  const token = Cookies.get('jwt_token')
  if (!token) return handleLogout()

  const option = {
    method: 'GET',
    heades: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  const response = await fetch(URL, option)
  const data = await response.json()
  setLoading(false)
  console.log(response)
  console.log(data)
}

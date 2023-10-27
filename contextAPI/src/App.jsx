import Login from "./Components/login"
import Profile from "./Components/profile"
import UserContextProvider from "./UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h2>Context API</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

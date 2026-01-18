import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login/Login";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const { user } = useContext(AuthContext);

  return user ? <Dashboard user={user} /> : <Login />;
}

export default App;

import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./componentes/Login";
import { LogoutButton } from "./componentes/Logout";
import { Profile } from "./componentes/Profile";
import logo from "./logo.svg";
import "./App.css";
import RegistroUsuario from "./componentes/RegistroUsuario";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {isAuthenticated ? (
          <>
          <RegistroUsuario/>
            {/* <Profile /> */}
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
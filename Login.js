import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  console.log("entro");

  return <button onClick={() => loginWithRedirect()}>Login</button>;
};
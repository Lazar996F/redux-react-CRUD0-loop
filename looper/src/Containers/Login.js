import React, { useState } from "react";

function Login() {
  const [logObject, setLogObject] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });

  return (
    <div>
      <h1>LOGIN</h1>
    </div>
  );
}

export default Login;

import React, { useState } from "react";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Call your backend function here to authenticate the user
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // User is authenticated, redirect to the dashboard or another page
        window.location.href = "/dashboard";
      } else {
        // Handle authentication error
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;

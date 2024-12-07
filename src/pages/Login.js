import { useState } from "react";
import "./Login.css";
import Logo from "../images/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      alert("Login Successful");
      localStorage.setItem("user", data.user);
    } else {
      alert("Please check your email and password");
    }
    console.log(data);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "150px", // Decreased size
            height: "90px", // Adjusted proportionally
            marginTop: "10px",
            display: "block", // Ensure it's treated as a block element
            marginLeft: "auto", // Center horizontally
            marginRight: "auto",
          }}
        />
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
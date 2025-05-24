import React from "react";
import { Link } from "react-router";

const LoginPage = () => {

    return (
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "white",
        backgroundColor: "#0d47a1", // optional, for contrast
        padding: "0 1rem"
      }}
    >
            <h1>Login page</h1>
            <p style={{ fontSize: "1.5rem" }}>You must log in to view the protected pages </p>
            
            <input
  id="username"
  placeholder="username"
  style={{
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    width: "300px",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}
/><br />
            <input
  id="password"
  type="password"
  placeholder="password"
  style={{
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    width: "300px",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}
/><br />
            {/* Login web form  */}
            
            <button>Log in</button>
            
            <p>Not Registered?
                <Link to="/signup">Sign Up!</Link></p>
        </div>
    );
};

export default LoginPage;

import React from "react";
const SignUpPage = () => {

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
      <h1>SignUp page</h1>
      <p style={{ fontSize: "1.5rem" }}>You must register a username and password to log in </p>
      <input
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
     <input
  type="password"
  placeholder="re-type password"
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
      <button>Register</button>
    </div>
  );
};

export default SignUpPage;

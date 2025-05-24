import React from "react";
import { Link } from "react-router-dom";


const StartPage = () => {
  
    return(
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
      <h1>
        Welcome to Rentables! View your <Link to="/home" style={{ color: "#fff", textDecoration: "underline" }}>Movies</Link> or <Link to="/profile" style={{ color: "#fff", textDecoration: "underline" }}>Profile</Link>.
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        <Link to="/login" style={{ color: "#fff", textDecoration: "underline" }}>Login</Link> or{" "}
        <Link to="/signup" style={{ color: "#fff", textDecoration: "underline" }}>Signup</Link> to start your movie journey!
      </p>
    </div>
  );
};

export default StartPage;

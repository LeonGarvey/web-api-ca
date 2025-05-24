import React from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
    const navigate = useNavigate();
  
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
        <h1>
            You must log in to see your profile! {" "}</h1>
           <p><button
          onClick={() => navigate('/login')}
          style={{
            fontSize: "1.25rem",      // text size
            padding: "0.75rem 1.5rem", // space inside button
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            color: "#0d47a1",
            border: "none",
            cursor: "pointer",
            marginTop: "1rem"
          }}
        >Login</button></p> 
      
      </div>
    );
};

export default ProfilePage;

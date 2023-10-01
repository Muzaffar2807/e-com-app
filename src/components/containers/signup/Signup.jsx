import React from 'react';
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
  return (
    <div>
      Signup
      <div className="login-container">
        <h4>
          Already have an account?{" "}
          <span
            style={{ color: "#4caeda", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login Here!
          </span>
        </h4>
      </div>
    </div>
  );
}

export default Signup
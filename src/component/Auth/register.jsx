import { useState } from "react";
import Logo from "../shared/logo";
import "./Register.css";
import { data } from "react-router-dom";
function Register() {
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
     
      const response = await fetch(
        "https://zyloo-api-v1.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
         
          body: JSON.stringify(formData),
        },
      );

      const datafromserver = await response.json();   

      console.log(datafromserver);
    } catch (error) {
      console.log(error);
    }
  };

  // if (login){
  //     return <signIn/>
  // }

  // https://zyloo-api-v1.onrender.com/auth/login
  //      https://zyloo-api-v1.onrender.com/auth/register

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-brand">
          <div className="logo">
            <Logo />
          </div>
          <div>
            <span className="register-brand-name">CineScope</span>
          </div>
        </div>

        <div className="register-header">
          <h1 className="register-title">Create an account</h1>

          <p className="register-subtitle">
            Join CineScope and start your cinematic journey.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="name">First Name:</label>

            <input
              className="register-input"
              name="firstName"
              value={formData.firstName}
              type="text"
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="register-field">
            <label htmlFor="name">Last Name:</label>

            <input
              className="register-input"
              name="lastName"
              value={formData.lastName}
              type="text"
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">Email</label>

            <input
              className="register-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">Password</label>

            <input
              className="register-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="register-field">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <input
              className="register-input"
              name="confirmPassword"
              value={formData.confirmPassword}
              type="password"
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="register-submit">
            {login ? "Signing...." : "Create Account"}
          </button>
        </form>

        <div className="register-footer">
          <span>Already have an account? </span>

          <a href="#login" className="register-login-link">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;

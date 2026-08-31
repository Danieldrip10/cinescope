import Logo from "../shared/logo"
import "./signIn.css"
import { useState } from "react"




export default function SignIn() {
const [loginData, setLoginData] = useState({
  email: '',
  password: '',
})

const handleChange = (e) => {
  const {name, value} = e.target;
  setLoginData(prev => ({...prev, [name]: value}));

  
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(loginData)
}


  return(
    <div className="signin-page">
      <div className="signin-card">


          <div className="signin-brand">
              <div className="logo">
                <Logo/>

              </div>

              <div className="signin-brand-name">
                 <span>CineScope</span>
              </div>
          </div>


         <div className="signin-header">
           <h2 className="signin-tittle">Welcome back</h2>
           <p className="signin-p">Sign in to continue your cinematic journey</p>
         </div>



         <form className="signin-form"
         onSubmit={handleSubmit}
         >
          <div className="signin-field">
            <label htmlFor="email">
                 Email
            </label>

            

            <input type="email"
            name="email"
            onChange={handleChange}
            value={loginData.email}
            className="signin-input"
            placeholder="Enter your email"
            required
            />
          </div>

          <div className="signin-field">
            <label htmlFor="password">
              Password
            </label>

            <input type="text"
            name="password"
            value={loginData.password}
            onChange={handleChange}
             className="signin-input"
            placeholder="Enter your password"
            />

          </div>



          <button type="submit"
          className="signin-submit"
          >
            Sign Up
          </button>



         </form>





      </div>
    </div>
  )
}
import  React  from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupHandler } from "../../service/signupApi";
import { useAuth} from "../../contexts/authContext";
import "./login-page.css";

export default function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {authDispatch} = useAuth();
  // const [ userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const userSignup = async (e) => {
    e.preventDefault();
    if( email && password){
      const responseData = await signupHandler({
        email: email,
        password: password,
      });

      const { error } = responseData;
      if(error){
        console.log(error)
      } else{
        authDispatch({
          type: "SIGNUP",
        });
        navigate(location.state?.from?.pathname || "/", {replace: true});
      }
    }
  };

  return (
    <div class="main-container">
      <div class="content-container">
        <div class="login-container">
          <div class="login-elements">
            <div class="login-hero">Sign Up</div>
            <div class="login email">
              <label for="text">Email address</label>
              <input 
              type="text" 
              placeholder="aqsa@gmail.com"
              value={email}
              onChange={(e) =>{
                setEmail(e.target.value);
              }} />
            </div>
            <div class="login password">
              <label for="text">Password</label>
              <input 
              type="password" 
              placeholder="*****" 
              value={password}
              class = "password-block"
              onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            </div>
            <div class="login details">I accept all terms and Conditions</div>
            <div class="buttons">
              <button class="button button-primary"onClick={userSignup}>Create New Account</button>
              <br />
              <Link class="button button-secondary" to="/login">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

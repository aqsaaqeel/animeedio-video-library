import "./login-page.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupHandler } from "../../service/signupApi";
import { useAuth} from "../../contexts/authContext";

export default function SignupPage() {
  const navigate = useNavigate();
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
        navigate("/login", {replace: true});
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
              type="text" 
              placeholder="*****" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            </div>
            <div class="login details">I accept all terms and Conditions</div>
            <div class="buttons">
              <a class="button button-primary"onClick={userSignup}>Create New Account</a>
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

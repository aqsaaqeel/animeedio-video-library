import "./login-page.css";
import { useState } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom"
import { useAuth } from "../../contexts/authContext";
import { login } from "../../service/loginApi";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authDispatch} = useAuth();
  // const { loading } = authState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const defaultLogin = (e) => {
    e.preventDefault();
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshBalika123");
  };
  const userLogin = async (e) => {
    e.preventDefault();
    if(email && password){
      authDispatch({type : "LOADING"});
      const responseData = await login({
        email: email,
        password: password,
      });
      const { token, username, error} = responseData;
      if(error){
        console.log("Error occured");
      } else{
        authDispatch({
          type: "LOGIN",
          token: token,
          user: username,
        });
        localStorage.setItem("encodedToken", token);
        localStorage.setItem("user", username);
        navigate(location.state?.from?.pathname || "/", {replace: true});
      }
    }
  };
  return (
    <div className="main-container">
      <div className="content-container">
        <div className="login-container">
          <div className="login-elements">
            <div className="login-hero">Login</div>
            <button className="button" onClick={defaultLogin}>Login with default</button>
            <div className="login email">
              <label for="text">Email address</label>
              <input 
              type="email" 
              placeholder="Enter your email"
              class="password-block"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="login password">
              <label for="text">Password</label>
              <input 
              class="password-block"
              type="password" 
              placeholder="*****"
              value ={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className = "login details">
              <div className = "remember-check">
                <input type = "checkbox" />
                <label for = "checkbox">Remember Me</label>
              </div>
              <button className = "button secondary forgot-password" href="#">
                Forgot your password?
              </button>
            </div>
            <div className = "buttons">
              <button className = "button" onClick = {userLogin}>Login</button>
              <button className = "button"><Link className="links" to = "/signup">
                Create New Account{" "}
              </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./login-page.css";
import { useState } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom"
import { useAuth } from "../../contexts/authContext";
import { loginHandler } from "../../service/loginApi";
export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authState, authDispatch} = useAuth();
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
      authDispatch({type : "LOADING"})
    }
  }
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
              type="text" 
              placeholder="adarshbalika@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="login password">
              <label for="text">Password</label>
              <input 
              id="password-block"
              type="password" 
              placeholder="*****"
              value ={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="login details">
              <div className="remember-check">
                <input type="checkbox" />
                <label for="checkbox">Remember Me</label>
              </div>
              <a className="forgot-password" href="#">
                Forgot your password?
              </a>
            </div>
            <div className="buttons">
              <a className="button">Login</a>
              <Link className="button" to="/signup">
                Create New Account{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

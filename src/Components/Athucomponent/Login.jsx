import React from "react";
import LoginForm from "./LoginForm";
import "./Auth.css";
import Logo from './../../Pages/Headercomponent/Logo';
import { toast } from "react-toastify"
import SocialLogin,{GoogleProvider,FacebookProvider} from "./LoginWithSocialMedia";
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
  let history = useHistory();
  let handleClick = async provider => {
    try {
      let res = await SocialLogin(provider);
      toast.success("successfully logged in");
      history.push("/UserHome/profile");
      console.log(res);
    } catch (error) {
      toast.error(error.message)
    }
  };


  return (
    
    <section id="authblock">
      <article>
        <div>
          <Logo />
        </div>

        <div className="authContent">
          <h1>To continue, log in to Spotify.</h1>
          <div>
            <button
              className="btn13"
              onClick={() => handleClick(FacebookProvider)}
            >
              <span>
                <i
                  class="fab fa-facebook-f"
                  style={{ padding: "5px", background: "transparent" }}
                ></i>
                CONTINUE WITH FACEBOOK
              </span>
            </button>
            <button className="btn2">CONTINUE WITH APPLE</button>
            <button
              className="btn3"
              onClick={() => handleClick(GoogleProvider)}
            >
              CONTINUE WITH GOOGLE
            </button>
            <button className="btn3" style={{background:"grey"}}>
              <Link to="/PhoneAuth">CONTINUE WITH PHONE NUMBER</Link>
            </button>
          </div>
          <p className="orblock">
            <strong>or</strong>
          </p>
        </div>
        <div className="formContent">
          <LoginForm />
        </div>
      </article>
    </section>
  );
};

export default Login;

import React from "react";
import LoginForm from "./LoginForm";
import "./Auth.css";
import Logo from './../../Pages/Headercomponent/Logo';

const Login = () => {
  return (
    <section id="authblock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>To continue, log in to Spotify.</h1>
          <div>
            <button className="btn13">
              <span>
                <i
                  class="fab fa-facebook-f"
                  style={{ padding: "5px", background: "transparent" }}
                ></i>
                Sign up with FaceBook
              </span>
            </button>
            <button className="btn2">CONTINUE WITH APPLE</button>
            <button className="btn3">CONTINUE WITH GOOGLE</button>
            <button className="btn3">CONTINUE WITH PHONE NUMBER</button>
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

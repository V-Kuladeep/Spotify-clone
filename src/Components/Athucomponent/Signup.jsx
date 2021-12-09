import React from 'react'
import Logo from '../../Pages/Headercomponent/Logo';
import "./Auth.css";
import SignupForm from './SignupForm';
import firebase from '../../firebase';
const Signup = () => {
    return (
      <section id="authblock">
        <article>
          <Logo />
          <div className="authcontent">
            <h1>Signup for free to start Listening</h1>
            <button>Signup with Facebook</button>
            <p className="orblock">
              <strong>or</strong>
            </p>
          </div>
          <div className="formContent">
            <SignupForm/>
          </div>
        </article>
      </section>
    );
}

export default Signup

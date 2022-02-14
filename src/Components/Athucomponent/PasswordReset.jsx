import React from 'react'
import "./Auth.css"
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import firebase from './../../firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
    let history=useHistory()
    let [state, setState] = useState({
        loading: false,
        email: "",
    });

    let { loading, email } = state;
    let handleChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    let handleSubmit = async e => {
        e.preventDefault();
        try {
            setState({ loading: true })
            await firebase.auth().sendPasswordResetEmail(email);
            let message = `Password reset link has been sent to ${email}`;
            toast.info(message);
            history.pushState("/login")
        } catch (err) {
            toast.error(err.message)
        }
    };
    return (
      <section>
        <article>
          <div className="authContent">
            <h1>Password Reset</h1>
            <p>
              Enter your Spotify username, or the email address that you used to
              register. We'll send you an email with your username and a link to
              reset your password.
            </p>
          </div>
          <div className="formContent">
            <div className="addForm">
              <h2>Sign up with your email address</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="password_reset">
                    Email address or username
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder=""
                    required
                    value={email}
                    onChange={handleChange}
                    
                  />
                </div>
                <button className="btn3" style={{ fontSize: "18px" }}>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                Send
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
}

export default PasswordReset

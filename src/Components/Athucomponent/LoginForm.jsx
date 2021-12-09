import React from "react";
import { Link,withRouter } from "react-router-dom";
import { useState } from "react";
import firebase from "../../firebase";
import {toast} from "react-toastify"

const LoginForm = ({history}) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  let { email, password, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      
        let USER_DATA = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (USER_DATA.user.emailVerified === true) {
            toast.success(`successfully${email} has been logged in`)
            history.push("/");
        } else {
            history.push("/login");
            toast.error(`email has not yet verified go to ${email} verify then login`)
        }
      
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <div className="addForm">
      <h2>Sign up with your email address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address or username</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email address or username"
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Create a Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="create a password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>

        <Link to="/">Forgot Password</Link>

        <span>
          <div className="form-group">
            <input type="checkbox" />
            <span className="checkboxContent mb-4">Remember me</span>
          </div>

          <div className="form-group btn-group1">
            <button> {loading === true ? "loading" : "Login "}</button>
          </div>
        </span>
        <p className="orblock"></p>
        <div className="form-group">
          <h1 className="endBlock" style={{ fontSize: "20px" }}>
            Don't have an account?
          </h1>
        </div>
        <button className="btn3" style={{ fontSize: "18px" }}>
          <Link to="/signup" style={{ textDecoration: "none", color: "#000" }}>
            Sign Up for Spotify
          </Link>
        </button>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);

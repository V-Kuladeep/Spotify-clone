import React from "react";
import { useState } from "react";
import "./Auth.css";
import { toast } from "react-toastify";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
const PhoneAuth = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    phone: "",
  });
  let { loading, phone } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ laoding: true });

      console.log(phone);
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let ConfrimationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let code = window.prompt("enter otp");
      ConfrimationMessage.confirm(code);
      toast.success("successfully logged in");
      history.push("/userHome/profile");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false, phone: "" });
  };

  return (
    <section id="phoneblock">
      <article>
        <div>
          <h1>Enter your phone number</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter your phone number"
              required
              name="phone"
              value={phone}
              onChange={handleChange}
            />
            <div id="recaptcha-container"></div>

            <button>
              {loading ? "sending" : "sent"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;

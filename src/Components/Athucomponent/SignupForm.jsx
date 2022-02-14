import React, { useState}from 'react'
import { Link,withRouter } from 'react-router-dom';
import { toast } from "react-toastify"
import firebase from 'firebase';


const SignupForm = ({history}) => {
    let [state, setState] = useState({
        email: "",
        email1: "",
        password: "",
        profile_name: "",
        month: "",
        dd: "",
        yy: "",
        gender: "",
        loading:false,
        
    })
    let {
        email,
        email1,
        password,
        profile_name,
        month,
        dd,
        yy,
        gender,
        loading,
    } = state;
    let handleChange = e => {
       
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    let handleSubmit = async e => {
        e.preventDefault();
        try {
          setState({ loading: true });
            if (email === email1) {
                let USER_DATA = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                // console.log(USER_DATA);
              // toast.success("successfully user registered");
              let confirmMessage = `A verification message has been sent to${email} and verfiy and login`;
              USER_DATA.user.sendEmailVerification();
              toast.info(confirmMessage);
              USER_DATA.user.updateProfile({
                displayName: profile_name,
                photoURL:"https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
              })
              //window.location.assign('./login)
              history.push('./login');
            } else {
              toast.error("confirm email is not matching");
            }
        } catch (error) {
           toast.error(error.message) 
      }
      setState({loading:false})
    }
    return (
      <div className="addForm">
        <h2>Sign up with your email address</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">What's your email?</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email1">Confirm your email</label>
            <input
              type="email"
              className="form-control"
              name="email1"
              id="email1"
              required
              placeholder="Enter your email again"
              value={email1}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Create a password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              required
              placeholder="Create a password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profile_name">What should we call you?</label>
            <input
              type="text"
              className="form-control"
              name="profile_name"
              id="profile_name"
              required
              placeholder="Enter a profile name"
              value={profile_name}
              onChange={handleChange}
            />
            <p>This appears on your profile.</p>
          </div>
          <div className="form-group">
            <label htmlFor="date">What's your date of birth?</label>
            <div className="dateBlock">
              <input
                type="text"
                className="form-control"
                name="month"
                required
                placeholder="Month"
                value={month}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control"
                name="dd"
                required
                placeholder="DD"
                value={dd}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control"
                name="yy"
                required
                placeholder="yy"
                value={yy}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gender">What's your gender? </label>
            <main className="genderBlock" value={gender} onChange={handleChange}>
              <span>
                <input type="radio" name="gender" id="gender" value="male" />
                Male
              </span>
              <span>
                <input type="radio" name="gender" id="gender" value="Female" />
                Female
              </span>
              <span>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Non Binary"
                />
                Non Binary
              </span>
            </main>
          </div>
          <div className="form-group">
            <input type="checkbox" name="text" />
            <span className="checkBoxContent">
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </span>
          </div>
          <div className="form-group">
            <p className="copyWriteText">
              <p>
                By clicking on sign-up, you agree to Spotify's Terms and
                Conditions of Use.
              </p>
              <br />
              To learn more about how Spotify collects, uses, shares and
              protects your <br />
              personal data, please see Spotify's Privacy Policy.
            </p>
          </div>
          <div className="form-group btn-group">
                    <button>{ loading===true? "Loading...":"Sign up"}</button>
          </div>
          <div className="form-group1">
            <p>
              Have an account?{""}
              <Link to="/login" style={{ color: "#1ed760 !important"  }}>
                Log in.
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
}

export default withRouter(SignupForm);

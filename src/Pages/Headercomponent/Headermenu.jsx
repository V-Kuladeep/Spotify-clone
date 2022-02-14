import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontextapi } from './../../Apis/Authcontext';
import { toast } from 'react-toastify';
import firebase from './../../firebase';

const Headermenu = () => {
  let [toggle, setToggle] = useState(false)
  let toggleElement = useRef();
  let childRef = useRef();
  let ToggleIt = () => {
    setToggle(!toggle)
  }
  const handleClickOutside = event => {
    if (childRef.current &&
      toggleElement.current &&
      !toggleElement.current.contains(event.target) &&
      !childRef.current.contains(event.target)) { setToggle(false) }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown",handleClickOutside)
    }
  }, [])
  let Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        toast.success("successfully logged out from application");
        window.location.assign("/login");
      })
      .catch(err => toast.error(err.message));
  }

  let AUTH = useContext(Authcontextapi);
  let AnonymousUser = () => (
    <Fragment>
          <li>
            <Link to="/">Premium</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">Download</Link>
          </li>
          <li className="bar">
            <Link href="/"></Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
    </Fragment>
  );
  let AuthenticatedUser = () => (
    <Fragment>
      <li>
        <Link to ref={toggleElement} onClick={ToggleIt}>
          <figure className="profile_img">
            {AUTH === null ? (
              "loading"
            ) : (
              <img alt={AUTH.displayName} src={AUTH.photoURL} />
            )}
            <figcaption style={{ color: "#fff" }}>
              {AUTH.displayName} <i class="fas fa-caret-down"></i>
            </figcaption>
          </figure>
          <div
            ref={childRef}
            className="dropDown"
            style={toggle === true ? { display: "block" } : { display: "none" }}>
            <ul>
              <li>
                <Link to>
                  Account
                  <span >
                    <i class="fal fa-external-link" style={{marginLeft:"80px"}}></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/UserHome/profile">Profile</Link>
              </li>
              <li>
                <Link to>
                  Upgrde to Premium
                  <span>
                    <i class="fal fa-external-link"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={Logout}>Logout</Link>
              </li>
            </ul>
          </div>
        </Link>
      </li>
    </Fragment>
  );
    return (
      <Fragment>
        <nav>
          <ul>{AUTH ? <AuthenticatedUser /> : <AnonymousUser/>}</ul>
        </nav>
      </Fragment>
    );
}

export default Headermenu

import React from 'react'
import "./profile.css"
import { useContext } from 'react';
import { Authcontextapi } from './../../Apis/Authcontext';
import { Link } from 'react-router-dom';


const Profile = () => {
    let{displayName, photoURL}= useContext(Authcontextapi)
    
    return (
      <section id="profileBlock">
        <header>
          <figure>
            <Link to="/UserHome/upload-photo">
              <span className="_editIcon">
                <i className="fa fa-pencil" aria-hidden="true" />
                choose photo
              </span>
              <img src={photoURL} alt={displayName} />
            </Link>
          </figure>
          <aside>
            <h5>Profile</h5>
            <h1>{displayName}</h1>
          </aside>
        </header>
      </section>
    );
}

export default Profile

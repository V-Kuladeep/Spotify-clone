import React from 'react'
import Logo from './../Pages/Headercomponent/Logo';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';

const UserLeftBLock = () => {
  return (
    <Fragment>
      <div className="userLeftBlock">
        <div className="logo">
          <Logo />
            <div className="Listbar">
              <ul>
                <li>
                  <span>
                    <i class="fas fa-home-alt"></i>
                  </span>
                  <Link to="/userhome/music-home">Home</Link>
                </li>
                <li>
                  <span>
                    <i class="fas fa-search"></i>
                  </span>
                  <Link to="">Search</Link>
                </li>
                <li>
                  <span>|| \</span>
                  <Link to="">My Library</Link>
                </li>
                <li>
                  <span>
                    <i class="fas fa-plus-square"></i>
                  </span>
                  <Link to="/userhome/create-play-list">Created Playlist</Link>
                </li>
                <li>
                  <span>
                    <i class="fas fa-heart-square"></i>
                  </span>
                  <Link>Liked Songs</Link>
                </li>
                <div className="Line"></div>
                <li>
                  <Link>My List</Link>
                </li>
                <li>
                  <span>
                    <i class="fal fa-arrow-circle-down"></i>
                  </span>
                  <Link>Install App</Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserLeftBLock

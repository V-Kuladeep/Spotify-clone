import React from "react";

import "./SliderComponent.css";
const SpotifyWrapped = () => {
  return (
    <section id="slider1-Block">
      <article>
        <div className="slider1Left">
          <h4>#SPOTIFYWRAPPED</h4>
          <h1>2021 Wrapped is ready.</h1>
          <p className="discover">
            But it’s only available in the Spotify app. Download it now to
            discover more.
          </p>

          <figure className="figures">
            <img
              src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
              alt="Download on the App Store"
            ></img>
            <img
              src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
              alt="Get it on Google Play"
              className="playStore"
            ></img>
          </figure>

          <p>
            <a href="#">Listen to 2021 highlights here.</a>
          </p>
        </div>
        <div className="slider1Right"></div>
      </article>
    </section>
  );
};

export default SpotifyWrapped;

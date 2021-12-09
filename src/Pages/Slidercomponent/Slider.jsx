import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <section id="sliderblock">
      <article>
        <div className="sliderleft">
          <h4>SPOTIFY PREMIUM</h4>

          <h1>Get 3 months of Premium for free</h1>
          <p className="enjoy">
            Enjoy ad-free music listening,offline music and more.Cancel anytime.
          </p>

          <button>Get 3 months</button>
          <p>
            Individual plan only. $9.99/month after. Terms and conditions apply.
            Open only to users who haven't already tried Premium. Offer ends 31
            December 2021.
          </p>
        </div>
              <div className="sliderright">
                  <figure></figure>
        </div>
      </article>
    </section>
  );
};

export default Slider;

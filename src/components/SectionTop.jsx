import React from "react";

const SectionTop = () => {
  return (
    <div
      className="section_top parallax-window"
      data-parallax="scroll"
      data-speed="0.5"
      positionX="left "
      data-image-src="https://www.boostroyal.com/assets/images/new/hero-bg-lux2.jpg"
    >
      <div className="container">
        <div className="container_title">
          <h2>
            Get Your LoL ELO Boost Now and Save Up to{" "}
            <span className="orange">30%</span>
          </h2>
        </div>
        <div className="subtitle">
          <h6>
            Safe and Reliable LoL ELO Boosting, Coaching & Account Buying
            Services in Season 10
          </h6>
        </div>
        <div className="link_group">
          <a class="btn btn-outline-primary" href="#" role="button">
            Boost Me
          </a>
          <a class="btn btn-outline-warning" href="#" role="button">
            Buy LoL Account
          </a>
          <a class="btn btn-outline-success" href="#" role="button">
            Coach Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionTop;

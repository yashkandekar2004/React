import React from 'react'

function About() {
  return (
    <section className="vanlife-about">
      <div className="about-hero" />
      <h2 className="vanlife-title">
        Don’t squeeze in a sedan when you could relax in a van.
      </h2>
      <p className="vanlife-description">
        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p className="vanlife-description">
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
      </p>

      <div className="about-cta-box">
        <h3 className="about-cta-heading">Your destination is waiting.<br />Your van is ready.</h3>
        <button className="about-cta-button">Explore our vans</button>
      </div>
    </section>
  )
}

export default About

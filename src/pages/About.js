import React from 'react'
import "../styles/About.css"
import Vision from "../assets/vision.jpg"
import Over from "../assets/overview.svg"
import Story from "../assets/story.jpg"

function About() {
  return (
    <>
    <div className="sample-header">
    <div className="sample-header-section">
      <h1>About Us</h1>
      <h2>Discover more about who we are</h2>
    </div>
  </div>
  <div className="sample-section">
    <div className="our-story">
      <h2>About Us</h2>
      <div className="stority">
        <div className="part-1">
          <div className="story-writing">
            <h3>Our Vision</h3>
            <p>
            Building Tomorrow’s Connected Living: We envision a future where
            Roomie HQ is the heartbeat of a global community, pioneering
            revolutionary connections and setting the standard for inclusive,
            secure, and vibrant shared living experiences. Our vision is to
            redefine cohabitation, making it a seamless and enriching journey
            for individuals worldwide.
            </p>
          </div>
          <div className="vision-op">
            <img src={Vision} alt="vision" />
          </div>
        </div>
        <div className="part-2">
          <div className="vision-op">
            <img src={Story} alt="vision" />
          </div>
          <div className="story-writing">
            <h3>Our Story</h3>
            <p>
              Our mission is to empower individuals embarking on shared living
              journeys with a tool that reshapes the status quo. By harnessing
              the capabilities of cutting-edge AI technology and intricate user
              profiles, we have developed a dynamic platform that transcends the
              mundane and often uncomfortable process of selecting roommates.
            </p>
            <blockquote>
              Some sort of quote
              <p>Us</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Company Overview Section */}
  <div className="company-overview">
    <div className="main__img--container">
      <img id="main__img" src={Over} alt="pic1" />
    </div>
    <div className="vert-layout">
      <h2>Company Overview</h2>
      <p>
        Our company presents an innovative solution to transform the roommate
        finding process by introducing Roomie HQ–an anonymous ratings and
        findings platform for roommates and housing. This groundbreaking
        platform is designed to revolutionize the way individuals discover
        compatible roommates and living arrangements, while prioritizing privacy
        and security. By harnessing AI technology and detailed user profiles, we
        offer a unique solution to empower users in making informed decisions
        when selecting their future roommates and residence.
      </p>
      <p>
        We take pride in our commitment to creating a safe and inclusive
        community. Our team works tirelessly to ensure that your shared living
        experience is hassle-free and enjoyable. With Roomie HQ, you'll find not
        just roommates, but friends who make your shared living journey
        memorable.
      </p>
    </div>
  </div>
  </>
  )
}

export default About
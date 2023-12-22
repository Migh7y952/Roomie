import React from 'react';
import BackImage from '../assets/living.jpg';
import Robot from '../assets/robot.jpg';
import Search from '../assets/search.svg';
import '../styles/Home.css';
import { Testimonials } from '../components/Testimonials';


function Home() {
    return (
      <>
        {/* Main Section */}
        <div className="main" style={{ backgroundImage: `url(${BackImage})`}}>
          <div className="main__container2">
            <div className="main__content2">
              <h1>ROOMIE HQ</h1>
              <h2>Cribbo</h2>
              <p>Search for your next roommate here</p>
              <button className="main__btn">
                <a>Start Here</a>
              </button>
            </div>
            <div className="main__img--container">
            </div>
          </div>
        </div>
  
        <div className="revolution">
          <div className="rev-container">
              <div className="rev-left">
              <img src={Search} alt="Product Image"></img>
              </div>
            <div className="rev-right">
              <div className="rev-color">
                <h2 className="rev-title">Revolutionizing The Roommate Search</h2>
                <p className="rev-description">
                At Roomie HQ, our mission is to transform the landscape of shared living.
                We are dedicated to pioneering innovative connections that extend beyond
                mere housing—creating a harmonious blend of privacy and community. With
                cutting-edge technology, our platform not only simplifies tenant finding
                but also revolutionizes the leasing experience. We’re committed to ensuring
                that every individual finds not just a space but a home, and every leasing
                office becomes a gateway to seamless, secure, and enriching shared living.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <Testimonials />
  
        {/* Diagnol */}
        <section className="diagnol">
          <div className="wrapper">
            <div className="cribbo">
              <h2 className="diagnol-title">Learn about how Cribo can help you</h2>
              <p>Yeah Cribo does this and that and makes your search EASY</p>
            </div>
            <div className="robot-background">
              <div className="robot__container">
                <div className="robot-border">
                  <img className="robot" src={Robot} alt="robot" />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Communication Section */}
        <div className="comm">
          <div className="comm__container">
            <div className="comm__card">
              <h2>Provide Feedback</h2>
              <p>Help Us Help You</p>
              <button>Write Here</button>
            </div>
            <div className="comm__card">
              <h2>Time to sign up</h2>
              <p>Take this basic questionnaire</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </>
    )
}
  
export default Home  
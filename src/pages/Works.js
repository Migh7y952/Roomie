import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ForumIcon from '@mui/icons-material/Forum';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import SecurityIcon from '@mui/icons-material/Security';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ApiIcon from '@mui/icons-material/Api';
import "../styles/Works.css";

function Works() {
  return (
    <>
    {/* Header Section with Video and Text */}
    <header className="welcome">
      <div className="video-container">
        <iframe
          width="500"
          height="264"
          allowFullScreen
          //src="https://www.youtube.com/embed/2syG_w2Bkys?autoplay=1&mute=1"
          title="videoDemo"
        />
      </div>
      <div className="welcome-container">
        <h1>Welcome to Navigating Shared Living</h1>
        <p>Discover the secrets to harmonious co-living experiences.</p>
      </div>
    </header>
    {/* How it works section */}
    <div className="repeat">
      <div className="titles">
        <h1>Resident Tools</h1>
      </div>
      <div className="inside">
        <div className="horizontal-layout">
          <a className="icon">
          <HelpIcon />
          </a>
          <h3 className="work-header">Anonymity</h3>
          <p className="work-text">
            Our site provides its users with privacy. We recognize the importance
            of keeping your information safe from the public.
          </p>
        </div>
        <div className="horizontal-layout">
          <a className="icon">
            <BookmarkIcon />
          </a>
          <h3 className="work-header">Favorites</h3>
          <p className="work-text">
            Keep your favorites for later! This feature is convenient and can help
            you in choosing your roommates. You should be able to keep a list of
            people with characteristics that align with yours when it comes to
            living in a shared space. This gives you the ability to save and
            communicate with your favroite people.
          </p>
        </div>
        <div className="horizontal-layout">
          <a className="icon">
            <ForumIcon />
          </a>
          <h3 className="work-header">Community Discussions</h3>
          <p className="work-text">
            Engage with other users on the site. Don't miss out on the opportunity
            to share and gain insights on how to make your decisions. These
            conversations shed light on diverse perspectives and common
            experiences. The discussion board enriches our platform by forming a
            cohesive network that makes your journey in finding a roommate much
            easier.
          </p>
        </div>
        <div className="horizontal-layout">
          <a className="icon">
            <SmartToyIcon />
          </a>
          <h3 className="work-header">Cribbo</h3>
          <p className="work-text">
            Cribbo plays a pivotal role
            in enhancing user experience by intelligently pairing users based on
            their account information. Leveraging advanced algorithms and user preferences,
            Cribbo analyzes account details such as interests, preferences, and behavioral
            patterns to create tailored matches. Whether connecting users with similar
            hobbies or aligning them based on specific criteria, Cribbo strives to foster
            meaningful connections.
            </p>
        </div>
        <div className="horizontal-layout">
          <a className="icon">
            <i className="fa-solid fa-message" style={{ color: "#3498db" }} />
          </a>
          <h3 className="work-header">Anonymity</h3>
          <p className="work-text">Our site provides its users with privacy</p>
        </div>
        <div className="horizontal-layout">
          <a className="icon">
            <i className="fa-solid fa-house" style={{ color: "#3498db" }} />
          </a>
          <h3 className="work-header">Anonymity</h3>
          <p className="work-text">Our site provides its users with privacy</p>
        </div>
      </div>
    </div>
    {/* Encouragement Section */}
    <div className="encouragement">
      <h2>Join Our Community</h2>
      <p>
        Start your journey to better shared living today. Connect with like-minded
        individuals, find your ideal roommates, and create a harmonious living
        experience.
      </p>
      <a href="/Signup.html" className="btn">
        Sign Up Now
      </a>
    </div>
  {/* HIW Part 2 */}
  <div className="purp">
    <div className="titles">
      <h1>How It Works</h1>
    </div>
    <div className="inside">
      <div className="horizontal-layout">
        <a className="icon">
          <SecurityIcon />
        </a>
        <h3 className="work-header">Data Security</h3>
        <p className="work-text">
          We are dedicated to safeguarding your data security and privacy. We
          adhere to rigorous data protection standards and we are regularly
          auditing and updating our security protocols.Rest assured that your
          trust in us is met with a commitment to providing a secure and
          reliable platform
        </p>
      </div>
      <div className="horizontal-layout">
        <a className="icon">
          <CloudDoneIcon />
        </a>
        <h3 className="work-header">Cloud</h3>
        <p className="work-text">
          Keep your favorites for later! This feature is convenient and can help
          you in choosing your roommates. You should be able to keep a list of
          people with characteristics that align with yours when it comes to
          living in a shared space. This gives you the ability to save and
          communicate with your favroite people.
        </p>
      </div>
      <div className="horizontal-layout">
        <a className="icon">
          <ApiIcon />
        </a>
        <h3 className="work-header">API's</h3>
        <p className="work-text">
          These APIs empower our platform to access and
          leverage external data, services, or features, enabling us to offer
          dynamic and up-to-date content. Users benefit from enhanced features,
          real-time information, and expanded capabilities made possible through
          the synergy of our APIs.
          Our API-driven approach ensures that our site remains robust, versatile,
          and responsive to the evolving needs of our users.
        </p>
      </div>
      <div className="horizontal-layout">
        <a className="icon">
          <MonetizationOnIcon />
        </a>
        <h3 className="work-header">Investments</h3>
        <p className="work-text">
          Our investors ardently believe in the success of our site. Their
          unwavering support is rooted in a shared vision of the platform's
          potential and its ability to meet the demands of our target audience.
          Their confidence is reflected in their strategic contributions and
          commitment to fueling our growth. With a strong belief in the team,
          technology, and market opportunity, our investors play a pivotal role in
          propelling our site towards sustained success and innovation
          </p>
      </div>
      <div className="horizontal-layout">
        <a className="icon">
          <i className="fa-solid fa-message" style={{ color: "#3498db" }} />
        </a>
        <h3 className="work-header">Anonymity</h3>
        <p className="work-text">Our site provides its users with privacy</p>
      </div>
      <div className="horizontal-layout">
        <a className="icon">
          <i className="fa-solid fa-house" style={{ color: "#3498db" }} />
        </a>
        <h3 className="work-header">Anonymity</h3>
        <p className="work-text">Our site provides its users with privacy</p>
      </div>
    </div>
  </div>
  {/* Diversity and Inclusiveness */}
  <div className="diverse__cont">
    <div className="diverse">
      <h1 className="header">We're diverse and inclusive</h1>
      <h3 className="subheader">Here is how we know this</h3>
    </div>
    <div className="diversed">
      <img className="svg" src="images/diverse.svg" alt="pic1" />
    </div>
  </div>
</>
    )
}

export default Works
import React from "react";
import "./About.css"; // Ensure this CSS file exists

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>About <span>CommunionHub</span></h1>
          <p>Bringing communities together through meaningful events and shared experiences.</p>
        </div>
        <div className="hero-image">
          <img src="/assets/images/CommunityGathering.jpg" alt="Community Gathering" />
        </div>
      </div>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>"At CommunionHub, our mission is to bridge communities by creating a dynamic platform where individuals, organizations, and faith-based groups can come together to share, engage, and grow. We strive to foster meaningful connections through events, discussions, and shared experiences, empowering people to strengthen their sense of belonging and unity. By leveraging technology, we aim to make community engagement seamless, inclusive, and impactful, ensuring that everyone has a space to contribute, learn, and celebrate together."</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What We Offer</h2>
        <div className="feature-list">
          <div className="feature-card">
            <h3>📅 Community-Centered Events</h3>
            <p>Find and join religious, charity, and social events that align with your interests.</p>
          </div>
          <div className="feature-card">
            <h3>🚀 Easy Event Creation</h3>
            <p>Quickly list events, add details, and share them with a wider audience.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Seamless Participation</h3>
            <p>Stay updated with notifications, RSVP to events, and engage with your community.</p>
          </div>
          <div className="feature-card">
            <h3>🎨 User-Friendly Interface</h3>
            <p>Simple and intuitive design for easy navigation and interaction.</p>
          </div>
        </div>
      </section>

     {/* Why Choose Us & Get Involved Section */}
<div className="about-sections">
  {/* Why Choose Us */}
  <section className="why-choose">
    <h2>Why Choose CommunionHub?</h2>
    <ul>
      <li>✔ Connect with Like-Minded People</li>
      <li>✔ Strengthen Community Bonds</li>
      <li>✔ Promote Engagement & Awareness</li>
    </ul>
  </section>

  {/* Get Involved Section */}
  <section className="get-involved">
    <h2>Get Involved</h2>
    <p>Want to be part of CommunionHub?</p>
    <ul>
      <li>🔹 <strong>Join an event</strong> – Explore upcoming events and participate.</li>
      <li>🔹 <strong>Host an event</strong> – Create and manage your own events.</li>
      <li>🔹 <strong>Share & Connect</strong> – Invite friends and spread the word.</li>
    </ul>
  </section>
</div>
    
     
    </div>
  );
}

export default About;

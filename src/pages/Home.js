import { Link } from "react-router-dom";
import "./HomeStyle.css";

function Home() {
  return (
    <>
      <div className="home">
        <h2>Bridging Faiths, Building Communities</h2>
        <p>
          A single platform that connects people together for meaningful
          relationships, building harmony across diverse faiths, cultures, and
          social interests through events and involvement.
        </p>
        <Link to="/events">
          <button className="explore-btn">Explore Events</button>
        </Link>
      </div>

      <div className="About">
        <div className="container">
          <img src="/assets/images/logoo.png" alt="CommunionHub Logo" />
          <h1 className="header-title">About Us</h1>
        </div>

        <div className="AboutSection">
          <div className="AboutImg">
            <img src="/assets/images/about.jpg" alt="About CommunionHub" />
          </div>
          <div className="About-text">
            <p>
              CommunionHub is a platform dedicated to fostering meaningful
              connections among individuals from diverse faiths, cultures, and
              social backgrounds. Our mission is to build harmony and inclusivity
              through events, discussions, and community-driven initiatives.
              <br />
              At CommunionHub, we believe that understanding and collaboration
              are the cornerstones of a thriving society. Whether it's through
              engaging events, faith-based dialogues, or social outreach
              programs, we provide a space for individuals to connect, share, and
              grow together.
            </p>
            <Link to="/about">
              <button className="read-more-btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

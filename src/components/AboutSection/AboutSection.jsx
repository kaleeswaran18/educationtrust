import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          
          {/* Left Content */}
          <div className="about-content">
            <button className="primary-btn about-tag">
              ABOUT US
            </button>

            <h2>
              Empowering Lives Through
              Education & Social Welfare
            </h2>

            <p>
              Our trust is dedicated to improving lives through
              education, healthcare, and community development.
              We strive to create opportunities and provide
              support for individuals and families in need.
            </p>

            <button className="primary-btn">
              TALK WITH US
            </button>
          </div>

          {/* Right Image */}
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="About"
              className="about-image"
            />

            <div className="stat-card card-1">
              <h3>150+</h3>
              <p>Students</p>
            </div>

            <div className="stat-card card-2">
              <h3>50+</h3>
              <p>Programs</p>
            </div>

            <div className="stat-card card-3">
              <h3>5000+</h3>
              <p>Beneficiaries</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
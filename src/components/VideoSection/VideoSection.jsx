import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">

        <button className="primary-btn video-tag">
          OUR IMPACT
        </button>

        <h2>
          See How We Transform
          Lives Every Day
        </h2>

        <p>
          Watch our journey and discover how we help
          communities through education, healthcare,
          and social welfare initiatives.
        </p>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Trust Video"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default VideoSection;
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="container">

        <h2 className="contact-info-title">
          Find Us Here
        </h2>

        <div className="contact-info-grid">

          <div className="info-card">
            <h4>📞 Phone</h4>
            <p>+91 9876543210</p>
          </div>

          <div className="info-card">
            <h4>✉️ Email</h4>
            <p>info@suryatrust.com</p>
          </div>

          <div className="info-card">
            <h4>📍 Location</h4>
            <p>Madurai, Tamil Nadu</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;
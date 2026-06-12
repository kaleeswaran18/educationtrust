import "./ContactBanner.css";

function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="contact-wrapper">

        <div className="contact-left">

          <span className="breadcrumb">
            Home / Contact
          </span>

          <h1>Contact Us</h1>

          <p>
            Kindly reach us to get the fastest
            response and treatment.
          </p>

        </div>

        <div className="contact-right">

          <img
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=900"
            alt="Doctor"
          />

          <div className="doctor-card">

            <div className="doctor-avatar"></div>

            <div>

              <h5>Dr. Surya Trust</h5>

              <small>
                Available Mon - Sat | 7AM - 9PM
              </small>

            </div>

          </div>

          <div className="patient-card">

            <h3>5000+</h3>

            <span>Happy Students</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactBanner;
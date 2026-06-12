import "./ContactForm.css";

function ContactForm() {
return ( <section className="contact-form-section"> <div className="contact-form-wrapper">


    <div className="contact-form-card">

      <form>

        <div className="form-grid">

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="David John"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="text"
              placeholder="(123) 456 - 789"
            />
          </div>

          <div className="form-group full-width">
            <label>Email</label>

            <input
              type="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="form-group">
            <label>District</label>

            <input
              type="text"
              placeholder="Madurai"
            />
          </div>

          <div className="form-group">
            <label>College</label>

            <input
              type="text"
              placeholder="ABC College"
            />
          </div>

          <div className="form-group">
            <label>Passout</label>

            <input
              type="number"
              placeholder="2025"
            />
          </div>

          <div className="form-group full-width">
            <label>Message</label>

            <textarea
              rows="5"
              placeholder="Write your message"
            ></textarea>
          </div>

        </div>

        <button
          className="submit-btn"
          type="submit"
        >
          Submit →
        </button>

      </form>

    </div>

  </div>
</section>


);
}

export default ContactForm;

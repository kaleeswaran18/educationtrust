import { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

function ContactForm() {
  const [formType, setFormType] = useState("general");

  return (
    <section className="contact-form-section">
      <div className="contact-form-wrapper">
        <motion.div
          className="contact-form-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
      

          <form>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="(123) 456 - 7890" />
              </div>

              <div className="form-group full-width">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>

              {formType === "volunteer" ? (
                <>
                  <div className="form-group">
                    <label>Preferred Role</label>
                    <input type="text" placeholder="Event Coordinator, Mentor, etc." />
                  </div>
                  <div className="form-group">
                    <label>Availability</label>
                    <input type="text" placeholder="Weekdays / Weekends" />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label>District</label>
                    <input type="text" placeholder="Madurai" />
                  </div>
                  <div className="form-group">
                    <label>College</label>
                    <input type="text" placeholder="ABC College" />
                  </div>
                  <div className="form-group">
                    <label>Passout</label>
                    <input type="number" placeholder="2025" />
                  </div>
                </>
              )}

              <div className="form-group full-width">
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder={
                    formType === "volunteer"
                      ? "Tell us why you'd like to volunteer and how you'd like to help"
                      : "Write your message"
                  }
                />
              </div>
            </div>

            <motion.button
              className="submit-btn"
              type="submit"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {formType === "volunteer" ? "Submit Volunteer Inquiry" : "Submit Enquiry"} →
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;

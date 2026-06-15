import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./ContactBanner.css";

function ContactBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="contact-banner bg-radial-warm" ref={ref}>
      <div className="contact-wrapper">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="breadcrumb">
            <Link to="/">Home</Link> / Contact
          </span>

          <h1>
            Let's Connect & <span className="gradient-text">Serve Together</span>
          </h1>

          <p>
            Reach out for volunteer opportunities, program enquiries,
            or to learn more about our trust activities and community services.
          </p>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src="https://res.cloudinary.com/dbrymrvqu/image/upload/v1781498416/ChatGPT_Image_Jun_15_2026_10_09_39_AM_ze1gck.png"
            alt="Community support"
          />

          {/* <div className="doctor-card glass-card">
            <div className="doctor-avatar" />
            <div>
              <h5>Surya Trust Team</h5>
              <small>Available Mon - Sat | 9AM - 6PM</small>
            </div>
          </div>

          <div className="patient-card glass-card">
            <h3>200+</h3>
            <span>Active Volunteers</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactBanner;

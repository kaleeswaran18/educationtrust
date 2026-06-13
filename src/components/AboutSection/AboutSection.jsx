import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import CTAButton from "../shared/CTAButton";
import "./AboutSection.css";
import doctorsaravana from "../../assets/images/doctorsaravana.png";
const pillars = [
  {
    title: "Dr. Saravanan Hospital",
    text: "Providing quality, affordable, and compassionate healthcare with advanced medical facilities, ensuring every patient receives exceptional treatment and personalized care.",
    icon: "mission",
  },
  {
    title: "Placement & Training",
    text: "Empowering students and young professionals through skill development, placement training, career guidance, and employment opportunities to build successful careers.",
    icon: "vision",
  },
  {
    title: "Surya Trust",
    text: "Committed to creating a better society by promoting education, healthcare, social welfare, and community development through impactful service initiatives.",
    icon: "values",
  },
  {
    title: "Founder's Vision",
    text: "Dr. P. Saravanan envisions a society where everyone has access to quality education, healthcare, and meaningful employment opportunities, empowering individuals to build a brighter future.",
    icon: "commitment",
  },
];

function PillarIcon({ type }) {
  const icons = {
    mission: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    vision: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
    values: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
    commitment: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18V6l8-3 8 3v12l-8 3-8-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M12 3v18M4 6l8 3 8-3" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
  };
  return <span className="pillar-icon">{icons[type]}</span>;
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="why-trust trust-section trust-section--white" id="about" ref={ref}>
      <div className="why-trust-bg" aria-hidden="true" />
      <div className="why-trust-accent-line" aria-hidden="true" />
      <div className="container">
        <SectionHeader
  label="About Our Founder"
  title="A Vision to Empower"
  highlight="Every Life"
  description="Dr. Saravanan's dream is to build a society where no one is left behind by ensuring access to quality education, healthcare, and meaningful employment opportunities. Through dedication, compassion, and selfless service, he strives to empower individuals and create a lasting positive impact on society."
/>

        <div className="why-trust-grid">
          <motion.div
            className="why-trust-visual"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="why-trust-shape why-trust-shape--1" aria-hidden="true" />
            <div className="why-trust-shape why-trust-shape--2" aria-hidden="true" />
            <div className="why-trust-image-frame">
             <img
  src="../../src/assets/images/doctorsaravana.png"
  alt="Dr. Saravanan"
  loading="lazy"
/>
              <div className="why-trust-image-badge">
                <strong>22+</strong>
                <span>Years of Service</span>
              </div>
            </div>
            <div className="why-trust-trust-bar">
              <span className="why-trust-trust-dot" aria-hidden="true" />
              <p>Trusted by communities across Tamil Nadu</p>
            </div>
          </motion.div>

          <motion.div
            className="why-trust-content"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="why-trust-pillars">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="pillar-card"
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.55 }}
                  whileHover={{ y: -4 }}
                >
                  <PillarIcon type={p.icon} />
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <CTAButton onClick={() => document.getElementById("impact-stats")?.scrollIntoView({ behavior: "smooth" })}>
              See Our Impact
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

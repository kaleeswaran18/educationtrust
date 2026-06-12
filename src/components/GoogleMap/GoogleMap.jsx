import "./GoogleMap.css";

function GoogleMap() {
  return (
    <section className="google-map-section">
      <div className="container">

        <div className="map-wrapper">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default GoogleMap;
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="text-center">About Us</h2>
        <p style={{ maxWidth: '700px', margin: '1.5rem auto 0' }} className="text-center">
          Sammunat is a technology-driven company focused on delivering innovative solutions that help businesses grow and scale in the digital era. With a team of experienced developers and designers, we transform ideas into reality.
        </p>
        <div className="grid" style={{ marginTop: '3rem' }}>
          <div className="service-card">
            <h3>🎯 Expert Team</h3>
            <p>Highly skilled developers and designers with years of experience</p>
          </div>
          <div className="service-card">
            <h3>⚡ Fast Delivery</h3>
            <p>Quick turnaround times without compromising on quality</p>
          </div>
          <div className="service-card">
            <h3>🔒 Secure Solutions</h3>
            <p>Enterprise-grade security and data protection standards</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

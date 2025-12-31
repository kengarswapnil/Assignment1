function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies for optimal performance",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for your business",
    },
    {
      title: "Product Strategy",
      description:
        "Strategic consulting to help your digital products succeed in the market",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, user-centered designs that enhance engagement and conversions",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing support and maintenance to keep your systems running smoothly",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="text-center">Our Services</h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "1rem auto 3rem",
          }}
        >
          We offer comprehensive digital solutions tailored to your specific
          business needs
        </p>
        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

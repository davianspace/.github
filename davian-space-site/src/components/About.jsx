const About = () => {
  return (
    <section id="about" className="section-padding border-t border-neutral-800/40">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">About the Organization</h2>
          <p className="section-subtitle mb-8">
            Engineering-driven. Infrastructure-focused. Built for production.
          </p>

          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              Davian Space is a software engineering organization and development
              studio that designs and delivers systems intended for long-term
              operation at scale. Every component we build is evaluated against
              the demands of real production environments — security, reliability,
              and maintainability are non-negotiable.
            </p>
            <p>
              Our work spans enterprise backend platforms, cross-platform
              application development, modern web frontends, and cloud
              infrastructure. We operate at the intersection of application
              engineering and infrastructure design, treating software as a
              discipline that extends well beyond feature delivery.
            </p>
            <p>
              Whether constructing internal tooling, orchestrating cloud
              deployments, or engineering modular library ecosystems, Davian
              Space approaches every engagement with the rigor and precision
              expected of production-grade engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

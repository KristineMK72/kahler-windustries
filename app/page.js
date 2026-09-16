import Link from "next/link";

const services = [
  {
    icon: "🏗️",
    title: "Installation",
    desc: "Tower erection, nacelle install, and commissioning with tight safety and alignment standards.",
  },
  {
    icon: "🔍",
    title: "Inspections",
    desc: "Structural, mechanical, and end-of-warranty assessments with clear written reports.",
  },
  {
    icon: "⚙️",
    title: "Mechanical",
    desc: "Gearbox work, fluid service, brakes, and major component replacement in the field.",
  },
  {
    icon: "⚡",
    title: "Electrical",
    desc: "Fault finding, sensor and converter issues, component swaps, and control troubleshooting.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="section-label">Wind turbine field services</p>
          <h1>
            Reliable work at height. <span>Honest service on the ground.</span>
          </h1>
          <p className="hero-lead">
            Kahler Windustries delivers installation, inspection, mechanical, and electrical
            service for commercial wind systems across rural Minnesota and the Upper Midwest —
            owner-operated by Tom Kahler.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View services
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              <strong>15+</strong>
              <span>Years in the field</span>
            </div>
            <div>
              <strong>Upper Midwest</strong>
              <span>Dakota Wind & commercial fleets</span>
            </div>
            <div>
              <strong>Owner-run</strong>
              <span>Direct accountability</span>
            </div>
          </div>
        </div>
      </section>

      <div className="page">
        <section className="section">
          <p className="section-label">What we do</p>
          <h2 style={{ margin: "0 0 8px", fontSize: "clamp(1.6rem, 3vw, 2rem)" }}>
            Core capabilities
          </h2>
          <p className="muted" style={{ margin: "0 0 28px", maxWidth: "36rem" }}>
            From scheduled preventive work to emergency down-tower response — built for uptime and
            safety.
          </p>
          <div className="grid">
            {services.map((s) => (
              <article key={s.title} className="card">
                <div className="card-icon" aria-hidden="true">
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="about-block">
            <div>
              <p className="section-label">About</p>
              <h2 style={{ margin: "0 0 14px", fontSize: "clamp(1.6rem, 3vw, 2rem)" }}>
                Built around real turbine experience
              </h2>
              <p className="muted" style={{ margin: "0 0 12px" }}>
                Tom Kahler has spent 15 years working on Dakota Wind turbines and large commercial
                systems across the region. Kahler Windustries exists to bring that experience to
                site owners and operators who need dependable, professional field work — without the
                runaround.
              </p>
              <p className="muted" style={{ margin: 0 }}>
                Safety, clear communication, and getting the unit back online the right way are the
                standard on every job.
              </p>
            </div>
            <div className="about-panel">
              <h3 style={{ margin: "0 0 4px" }}>Why operators call us</h3>
              <ul>
                <li>Hands-on experience with Dakota Wind and major OEM platforms</li>
                <li>Honest assessments — no unnecessary work</li>
                <li>Focus on rural Minnesota and nearby Upper Midwest sites</li>
                <li>Direct line to the owner, not a call center</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 24 }}>
          <div className="cta-band">
            <h2>Need service on a turbine?</h2>
            <p>
              Tell us the site, the issue, and the timeline. We’ll respond with a clear plan and
              quote.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Tom
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

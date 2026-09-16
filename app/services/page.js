import Link from "next/link";

export const metadata = {
  title: "Services",
};

const services = [
  {
    icon: "🏗️",
    title: "Turbine installation",
    desc: "From ground prep to final commissioning — tower erection, nacelle install, and precision alignment with strict safety protocols.",
  },
  {
    icon: "🔍",
    title: "Inspections & audits",
    desc: "Structural and mechanical inspections, blade condition, tower integrity, fluid analysis, and end-of-warranty walkthroughs with written reports.",
  },
  {
    icon: "⚙️",
    title: "Major mechanical repair",
    desc: "Gearbox replacements, generator alignments, brake overhauls, and complex troubleshooting for heavy component work in the field.",
  },
  {
    icon: "⚡",
    title: "Electrical systems",
    desc: "Fault diagnostics, sensor errors, converter issues, wiring repairs, component replacement, and control system updates.",
  },
  {
    icon: "🛡️",
    title: "Preventive maintenance",
    desc: "Scheduled programs to protect uptime — lubrication, filters, bolt torque, tensioning, and routine checks before problems grow.",
  },
  {
    icon: "🚑",
    title: "Emergency response",
    desc: "Rapid troubleshooting for unexpected down-towers. Priority is getting production back online safely and correctly.",
  },
];

export default function Services() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="section-label">Technical services</p>
        <h1>Work that keeps turbines producing</h1>
        <p>
          Comprehensive installation, inspection, mechanical, and electrical solutions for
          commercial wind systems — delivered with field-proven discipline.
        </p>
      </header>

      <div className="grid" style={{ marginBottom: 48 }}>
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

      <div className="cta-band">
        <h2>Need a custom quote?</h2>
        <p>Tell us about your site and the work required — we’ll follow up with next steps.</p>
        <Link href="/contact" className="btn btn-primary">
          Contact Tom
        </Link>
      </div>
    </div>
  );
}

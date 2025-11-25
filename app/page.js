import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 1. The Hero Section */}
      <div className="hero">
        <h1>Kahler Windustries</h1>
        <p>Reliable. Professional. Unmatched Wind Turbine Expertise.</p>
        <Link href="/contact" className="btn">Get a Quote</Link>
      </div>

      <div className="content">
        {/* 2. The Intro */}
        <h2>Owner: Tom Kahler</h2>
        <p>
          With 15 years of hands-on experience working on Dakota Wind turbines and large-scale 
          commercial wind systems across the Upper Midwest, Tim brings unmatched knowledge, 
          safety excellence, and reliability to every job.
        </p>

        {/* 3. The Services Grid */}
        <h2>Our Services</h2>
        <div className="grid">
          
          <div className="card">
            <span className="card-icon">🏗️</span>
            <h3>Installation</h3>
            <p>Expert wind turbine installation and structural setup.</p>
          </div>

          <div className="card">
            <span className="card-icon">🔍</span>
            <h3>Inspections</h3>
            <p>Structural assessments and safety diagnostics.</p>
          </div>

          <div className="card">
            <span className="card-icon">⚙️</span>
            <h3>Mechanical</h3>
            <p>Gearbox repairs, fluid changes, and mechanical fixes.</p>
          </div>

          <div className="card">
            <span className="card-icon">⚡</span>
            <h3>Electrical</h3>
            <p>Component replacement and electrical troubleshooting.</p>
          </div>

        </div>

        {/* 4. Company History */}
        <h2>Company History</h2>
        <p>
          Kahler Windustries was founded to provide dependable, professional, and honest 
          wind turbine maintenance services to rural Minnesota and the surrounding regions.
        </p>
      </div>
    </main>
  );
}

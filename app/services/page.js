import Link from 'next/link';

export default function Services() {
  return (
    <main>
      {/* Reusing the Hero styling but with specific Services text */}
      <div className="hero">
        <h1>Technical Services</h1>
        <p>Comprehensive maintenance and repair solutions for commercial wind systems.</p>
      </div>

      <div className="content">
        
        {/* The Grid of Services */}
        <div className="grid">

          {/* Service 1 */}
          <div className="card">
            <span className="card-icon">🏗️</span>
            <h3>Turbine Installation</h3>
            <p style={{textAlign: 'left', fontSize: '0.95rem'}}>
              From ground prep to final commissioning. We handle heavy lifting, tower erection, and nacelle installation with strict safety protocols and precision alignment.
            </p>
          </div>

          {/* Service 2 */}
          <div className="card">
            <span className="card-icon">🔍</span>
            <h3>Inspections & Audits</h3>
            <p style={{textAlign: 'left', fontSize: '0.95rem'}}>
              Detailed structural and mechanical inspections. We provide comprehensive reports on blade condition, tower integrity, end-of-warranty walkthroughs, and fluid analysis.
            </p>
          </div>

          {/* Service 3 */}
          <div className="card">
            <span className="card-icon">⚙️</span>
            <h3>Major Mechanical Repair</h3>
            <p style={{textAlign: 'left', fontSize: '0.95rem'}}>
              Gearbox replacements, generator alignments, and brake system overhauls. We specialize in complex troubleshooting and heavy component replacement.
            </p>
          </div>

          {/* Service 4 */}
          <div className="card">
            <span className="card-icon">⚡</span>
            <h3>Electrical Systems</h3>
            <p style={{textAlign: 'left', fontSize: '0.95rem'}}>
              Expert diagnostics for faults, sensor errors, and converter issues. Includes component replacement, wiring repairs, and control system updates.
            </p>
          </div>

          {/* Service 5 */}
          <div className="card">
            <span className="card-icon">🛡️</span>
            <h3>Preventive Maintenance</h3>
            <p style={{textAlign: 'left', fontSize: '0.95rem'}}>
              Scheduled maintenance programs to maximize uptime. Includes lubrication, filter changes, bolt torque checks, and tensioning.
            </p>
          </div>

          {/* Service 6 */}
          <div className="card">
            <span className="card-icon">🚑</span>
            <h3>Emergency Response</h3>
            <p style={{textAlign: 'left', fontSize: '0.95rem'}}>
              Rapid response troubleshooting for unexpected down-towers. We prioritize getting your production back online safely and quickly.
            </p>
          </div>

        </div>

        {/* Bottom Call to Action */}
        <div style={{marginTop: '50px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '30px'}}>
          <h2>Need a custom quote?</h2>
          <p style={{marginBottom: '30px'}}>Contact us to discuss your specific site needs.</p>
          <Link href="/contact" className="btn">Contact Tom</Link>
        </div>

      </div>
    </main>
  );
}

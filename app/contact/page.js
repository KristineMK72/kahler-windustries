export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="section-label">Contact</p>
        <h1>Schedule service or ask a question</h1>
        <p>
          Reach Tom directly for quotes, site work, and emergency response. We serve rural
          Minnesota and nearby Upper Midwest wind sites.
        </p>
      </header>

      <div className="contact-layout">
        <div className="card contact-info">
          <h2 style={{ margin: "0 0 12px", fontSize: "1.25rem" }}>Direct contact</h2>
          <p>
            <strong style={{ color: "var(--text)" }}>Phone</strong>
            <br />
            <a href="tel:+15552189044">(555) 218-9044</a>
            <br />
            <span style={{ fontSize: "0.85rem" }}>Replace with real number before launch</span>
          </p>
          <p>
            <strong style={{ color: "var(--text)" }}>Email</strong>
            <br />
            <a href="mailto:info@kahlerwindustries.com">info@kahlerwindustries.com</a>
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong style={{ color: "var(--text)" }}>Service area</strong>
            <br />
            Rural Minnesota · Upper Midwest commercial wind sites
          </p>
        </div>

        <div className="card">
          <h2 style={{ margin: "0 0 16px", fontSize: "1.25rem" }}>Send a message</h2>
          <form
            action="mailto:info@kahlerwindustries.com"
            method="get"
            encType="text/plain"
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="site">Site / location</label>
              <input id="site" name="site" type="text" placeholder="Wind farm or nearest town" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="body"
                placeholder="Turbine ID, issue, urgency, preferred dates…"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Send message
            </button>
            <p className="muted" style={{ fontSize: "0.8rem", margin: "12px 0 0" }}>
              Opens your email client addressed to Kahler Windustries. For production, wire this to
              a form backend or Formspree.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

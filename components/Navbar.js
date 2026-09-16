import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">
            🌬️
          </span>
          <span>Kahler Windustries</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact" className="nav-cta">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between bg-white shadow">
      <h1 className="font-bold text-xl">Kahler Windustries</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

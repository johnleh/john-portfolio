import Link from "next/link";

export default function NavBar({ activePage = "about" }) {
  return (
    <nav className="port-nav">
      <Link href="/" className="port-nav-name">
        JOHN LE HOUILLIER
      </Link>
      
      <div className="port-nav-links" aria-label="Primary navigation">
      </div>
    </nav>
  );
}

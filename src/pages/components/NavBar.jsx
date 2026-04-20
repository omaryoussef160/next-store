import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" href="/">
          🛍️ MyStore
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-lg-3">

            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active-link" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`nav-link ${isActive("/products") ? "active-link" : ""}`}
            >
              Products
            </Link>

            <Link
              href="/contactus"
              className={`nav-link ${isActive("/contactus") ? "active-link" : ""}`}
            >
              Contact
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
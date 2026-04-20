import Link from "next/link";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>

      {/* Hero */}
      <div className={`${styles.hero} d-flex flex-column justify-content-center align-items-center text-center`}>
        <h1 className="display-4 fw-bold mb-3">
          Discover Your Style ✨
        </h1>

        <p className="lead mb-4">
          Explore amazing products with a modern experience
        </p>

        <div className="d-flex gap-3">
          <Link href="/products" className="btn btn-light px-4 py-2 fw-bold">
            Shop Now 🛒
          </Link>

          <Link href="/contactus" className="btn btn-outline-light px-4 py-2">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p className="text-muted">We provide the best experience</p>
        </div>

        <div className="row g-4 text-center">

          <div className="col-md-4">
            <div className={`${styles.featureCard} p-4 shadow-sm`}>
              <div className="fs-1 mb-3">🚀</div>
              <h5>Fast</h5>
              <p className="text-muted">Super fast performance</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`${styles.featureCard} p-4 shadow-sm`}>
              <div className="fs-1 mb-3">💎</div>
              <h5>Quality</h5>
              <p className="text-muted">Top quality products</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`${styles.featureCard} p-4 shadow-sm`}>
              <div className="fs-1 mb-3">🔒</div>
              <h5>Secure</h5>
              <p className="text-muted">Safe shopping experience</p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className={`${styles.cta} text-center py-5`}>
        <h3 className="fw-bold mb-3">Start Shopping Today 🛍️</h3>
        <Link href="/products" className="btn btn-light px-4 py-2 fw-bold">
          Browse Products
        </Link>
      </div>

    </div>
  );
};

export default HomePage;
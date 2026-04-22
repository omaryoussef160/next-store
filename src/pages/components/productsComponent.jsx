import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const API = "http://localhost:4000/products";

const ProductsComponent = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchProducts = async (url = API) => {
    try {
      setLoading(true);
      const res = await fetch(url);

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setItems(data);
    } catch (err) {
      setError("❌ Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch {
      alert("Delete failed ❌");
    }
  };

  const handleFilter = (category) => {
    if (category === "all") {
      fetchProducts();
    } else {
      fetchProducts(`${API}?category=${category}`);
    }
  };


  const filteredItems = items.filter((item) =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-5">

  
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mb-5 gap-3">
        <h2 className="fw-bold">🛍️ Our Collection</h2>

        <div className="d-flex gap-2 w-100 w-lg-auto">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            className="form-select"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>

          <Link href="/products/addform" className="btn btn-dark">
            + Add
          </Link>
        </div>
      </div>


      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-dark"></div>
        </div>
      )}


      {error && (
        <div className="alert alert-danger text-center">
          {error}
        </div>
      )}


      {!loading && !error && (
        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((p) => (
              <div key={p.id} className="col-md-6 col-lg-4 col-xl-3">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">


                  <div
                    className="position-relative bg-light"
                    style={{ height: "220px" }}
                  >
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill
                      className="p-3"
                      style={{ objectFit: "contain" }}
                    />

                    <span className="badge bg-dark position-absolute top-0 end-0 m-2">
                      ${p.price}
                    </span>
                  </div>


                  <div className="card-body d-flex flex-column">
                    <small className="text-muted text-uppercase mb-1">
                      {p.category}
                    </small>

                    <h6 className="fw-bold text-truncate">
                      {p.title}
                    </h6>

                    <p className="text-muted small flex-grow-1">
                      {(p.description || "No description").slice(0, 60)}...
                    </p>

                    <div className="d-flex gap-2 mt-auto">
                      <Link
                        href={`/products/${p.id}`}
                        className="btn btn-sm btn-outline-dark w-100"
                      >
                        View
                      </Link>

                      <button
                        onClick={() => handleDelete(p.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <h5 className="text-muted">No products found 😢</h5>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsComponent;
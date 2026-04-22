import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductDetails = ({ product }) => {
  const router = useRouter();

  if (router.isFallback || !product) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-dark"></div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-dark mb-4"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      <div className="row align-items-center">
        <div className="col-md-6 text-center bg-light rounded p-4">
          <div style={{ position: "relative", height: "400px" }}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <span className="badge bg-dark mb-2">{product.category}</span>

          <h2 className="fw-bold mb-3">{product.title}</h2>

          <p className="text-muted mb-4">
            {product.description || "No description"}
          </p>

          <h3 className="fw-bold text-success mb-4">
            ${product.price}
          </h3>

          <button className="btn btn-dark px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`http://localhost:4000/products/${id}`);

    if (!res.ok) {
      return { notFound: true };
    }

    const data = await res.json();

    return {
      props: { product: data },
    };
  } catch {
    return { notFound: true };
  }
}
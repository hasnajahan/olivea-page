import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import ProductServices from "../../services/productServices";

export default function Searching() {
    const router = useRouter();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [limit, setLimit] = useState("");

    useEffect(() => {
        async function loadProducts() {
            const result = await ProductServices.getProducts();
            setProducts(result);
        }

        loadProducts();
    }, []);

    useEffect(() => {
        if (!router.isReady) return;

        setSearch(router.query.search || "");
        setCategory(router.query.category || "");
        setLimit(router.query.limit || "");
    }, [router.isReady, router.query.search, router.query.category, router.query.limit]);

    let filteredProducts = products;

    if (category) {
        filteredProducts = filteredProducts.filter(
            (product) =>
                product.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (search) {
        filteredProducts = filteredProducts.filter(
            (product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit));
    }

    return (
        <main className="products-page">

            <section className="products-heading">
                <p className="products-subtitle">THE OLIVÉA COLLECTION</p>

                <h1>Discover Your Style</h1>

                <p className="products-description">
                    Thoughtfully chosen pieces for a wardrobe that feels
                    timeless, effortless, and entirely yours.
                </p>
            </section>

            <div className="products-toolbar">
                <p>Explore the collection</p>

                <span>
                    {filteredProducts.length} thoughtfully selected pieces
                </span>
            </div>

            <div className="products-grid">

                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link
                            href={`/products/${product.id}`}
                            className="product-card-link"
                            key={product.id}
                        >
                            <article className="product-card">

                                <div className="product-image">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                                    />

                                    <span className="view-product">
                                        Discover Piece
                                    </span>
                                </div>

                                <div className="product-info">

                                    <p className="product-category">
                                        {product.category}
                                    </p>

                                    <h2>{product.title}</h2>

                                    <p className="product-description">
                                        {product.description}
                                    </p>

                                    <div className="product-meta">

                                        <p className="product-price">
                                            ₹{product.price.toLocaleString("en-IN")}
                                        </p>

                                        <div className="product-rating">
                                            <span className="rating-star">★</span>
                                            <span>{product.rating}</span>
                                            <span className="rating-count">
                                                ({product.count})
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </article>
                        </Link>
                    ))
                ) : (
                    <p className="no-products">
                        {products.length === 0
                            ? "Loading products..."
                            : "No products found."}
                    </p>
                )}

            </div>
        </main>
    );
}
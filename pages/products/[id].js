import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import data from "../../data/products";
import { CartContext } from "../../context/CartContext";

export default function ProductDetails({ product }) {
    const { addToCart } = useContext(CartContext);
    const router = useRouter();

    if (!product) {
        return (
            <main className="product-details-page">
                <h1 className="not-found">Product not found</h1>
                <Link href="/products">Back to Products</Link>
            </main>
        );
    }

    function handleAddToCart() {
        addToCart(product);
        router.push("/cart");
    }

    return (
        <main className="product-details-page">

            <div className="product-details-container">

                <div className="product-details-image">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        priority
                        sizes="(max-width: 700px) 100vw, 50vw"
                    />
                </div>

                <div className="product-details-info">

                    <p className="product-category">
                        {product.category}
                    </p>

                    <h1>{product.title}</h1>

                    <div className="details-rating">
                        <span>★</span>
                        {product.rating}
                        <small>({product.count} reviews)</small>
                    </div>

                    <p className="details-price">
                        ₹{product.price.toLocaleString("en-IN")}
                    </p>

                    <p className="details-description">
                        {product.detailedDescription}
                    </p>

                    <div className="details-divider"></div>

                    <p className="details-note">
                        Thoughtfully selected. Timelessly styled.
                    </p>

                    <button
                        className="add-to-cart-button"
                        onClick={handleAddToCart}
                    >
                        ADD TO CART
                    </button>

                    <Link href="/products" className="back-products">
                        ← Continue Shopping
                    </Link>

                </div>

            </div>

        </main>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    const product = data.find(
        (item) => item.id === Number(id)
    );

    return {
        props: {
            product: product || null,
        },
    };
}
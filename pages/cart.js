import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    return (
        <main className="cart-page">

            <section className="cart-heading">
                <p>YOUR OLIVÉA SELECTION</p>
                <h1>Shopping Cart</h1>
                <span>Review the pieces you've chosen.</span>
            </section>

            {cart.length === 0 ? (

                <div className="empty-cart">
                    <h2>Your cart is currently empty.</h2>

                    <p>
                        Discover thoughtfully selected pieces
                        for your wardrobe.
                    </p>

                    <Link href="/products">
                        EXPLORE PRODUCTS
                    </Link>
                </div>

            ) : (

                <div className="cart-container">

                    <div className="cart-items">

                        {cart.map((product) => (
                            <article className="cart-item" key={product.id}>

                                <div className="cart-item-image">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="120px"
                                    />
                                </div>

                                <div className="cart-item-info">
                                    <p>{product.category}</p>
                                    <h2>{product.title}</h2>

                                    <span>
                                        ₹{product.price.toLocaleString("en-IN")}
                                    </span>

                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        REMOVE
                                    </button>
                                </div>

                            </article>
                        ))}

                    </div>

                    <aside className="cart-summary">
                        <h2>Order Summary</h2>

                        <div>
                            <span>Items</span>
                            <span>{cart.length}</span>
                        </div>

                        <div className="cart-total">
                            <span>Total</span>
                            <span>₹{total.toLocaleString("en-IN")}</span>
                        </div>

                        <p>
                            Shipping and payment are not included in this
                            assignment's cart functionality.
                        </p>

                        <Link href="/products">
                            CONTINUE SHOPPING
                        </Link>
                    </aside>

                </div>

            )}

        </main>
    );
}
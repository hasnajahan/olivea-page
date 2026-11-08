import Link from "next/link";

export default function Footer() {
    return (
        <footer className="olivea-footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        OLIVÉA
                    </Link>

                    <p>
                        Timeless fashion, thoughtfully chosen.
                        Discover elegant essentials and everyday
                        pieces designed to complement your style.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Explore</h3>
                    <Link href="/">Home</Link>
                    <Link href="/products">Shop Collection</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>

                <div className="footer-links">
                    <h3>Customer Care</h3>
                    <Link href="/contact">Contact Support</Link>
                    <Link href="/products">Browse Products</Link>
                    <Link href="/cart">Shopping Cart</Link>
                </div>

                <div className="footer-contact">
                    <h3>Get in Touch</h3>
                    <p>Have a question? We'd love to hear from you.</p>

                    <Link href="/contact" className="footer-contact-link">
                        Reach Out to Us →
                    </Link>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 OLIVÉA. All rights reserved.</p>
                <p>Elegance in every detail.</p>
            </div>

        </footer>
    );
}
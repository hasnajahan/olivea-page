import Link from "next/link";
import Image from "next/image";
import products from "../data/products";

export default function Home() {
    const featuredProducts = products.slice(0, 4);

    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="home-hero-content">
                    <p className="home-eyebrow">THE ART OF EVERYDAY ELEGANCE</p>

                    <h1>
                        Less, but
                        <br />
                        <span>better.</span>
                    </h1>

                    <p className="home-hero-description">
                        Discover thoughtfully chosen fashion and accessories
                        that bring timeless elegance to your everyday style.
                    </p>

                    <Link href="/products" className="home-primary-link">
                        EXPLORE THE COLLECTION <span>→</span>
                    </Link>
                </div>

                <div className="home-hero-image">
                    <Image
                        src="/p29.jpg"
                        alt="OLIVÉA fashion collection"
                        fill
                        priority
                        sizes="(max-width: 700px) 100vw, 55vw"
                    />
                    <div className="home-image-caption">
                        <span>OLIVÉA COLLECTION</span>
                        <span>TIMELESS BY NATURE</span>
                    </div>
                </div>
            </section>

            <section className="home-intro">
                <p className="home-section-label">A SOFTER KIND OF LUXURY</p>
                <h2>
                    Thoughtful style.
                    <br />
                    <em>Timeless choices.</em>
                </h2>
                <p>
                    A collection of clothing and accessories selected to make
                    everyday dressing feel simple, beautiful, and effortless.
                </p>
                <Link href="/about" className="home-text-link">
                    GET TO KNOW US →
                </Link>
            </section>

            <section className="home-featured">
                <div className="home-section-heading">
                    <div>
                        <p className="home-section-label">A FEW FAVOURITES</p>
                        <h2>Discover the collection</h2>
                    </div>

                    <Link href="/products" className="home-text-link">
                        VIEW ALL PRODUCTS →
                    </Link>
                </div>

                <div className="home-product-grid">
                    {featuredProducts.map((product) => (
                        <Link
                            href={`/products/${product.id}`}
                            className="home-product-card"
                            key={product.id}
                        >
                            <div className="home-product-image">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 600px) 50vw, 25vw"
                                />
                            </div>

                            <p className="home-product-category">
                                {product.category}
                            </p>

                            <h3>{product.title}</h3>

                            <p className="home-product-price">
                                ₹{product.price.toLocaleString("en-IN")}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="home-story">
                <div className="home-story-image">
                    <Image
                        src="/p31.jpg"
                        alt="A piece from the OLIVÉA collection"
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                    />
                </div>

                <div className="home-story-content">
                    <p className="home-section-label">THE OLIVÉA PHILOSOPHY</p>
                    <h2>
                        Elegance in
                        <br />
                        every detail.
                    </h2>
                    <p>
                        We believe personal style is found in the details.
                        Explore pieces that complement your wardrobe and
                        celebrate simplicity.
                    </p>
                    <Link href="/about" className="home-primary-link">
                        OUR STORY <span>→</span>
                    </Link>
                </div>
            </section>

            <section className="home-quote">
                <p>“Style is a way to express who you are.”</p>
                <span>THE OLIVÉA EDIT</span>
            </section>
        </main>
    );
}
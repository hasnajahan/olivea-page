import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setSubmitted(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    }

    return (
        <main className="contact-page">
            <section className="contact-heading">
                <p className="contact-eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
                <h1>Let's talk.</h1>
                <p>
                    Have a question or need assistance? Send us a message.
                    We're always happy to hear from you.
                </p>
            </section>

            <section className="contact-content">
                <div className="contact-information">
                    <p className="contact-section-label">GET IN TOUCH</p>
                    <h2>
                        Every conversation
                        <br />
                        begins somewhere.
                    </h2>

                    <p className="contact-description">
                        Whether you have a question about our collection or
                        need help with something, feel free to reach out.
                    </p>

                    <div className="contact-detail">
                        <span>01</span>
                        <div>
                            <h3>Email</h3>
                            <p>hello@olivea.com</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span>02</span>
                        <div>
                            <h3>Customer Support</h3>
                            <p>We're happy to help with your queries.</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span>03</span>
                        <div>
                            <h3>Explore</h3>
                            <Link href="/products">Discover our collection →</Link>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <p className="contact-section-label">SEND US A MESSAGE</p>
                    <h2>Write to us.</h2>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="contact-submit">
                            SEND MESSAGE <span>→</span>
                        </button>

                        {submitted && (
                            <p className="contact-success">
                                Thank you! Your message has been submitted.
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </main>
    );
}
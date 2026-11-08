import Head from "next/head";

import "../styles/globals.css";
import "../styles/products.css";
import "../styles/productdetails.css";
import "../styles/cart.css";
import "../styles/pages.css";

import "../components/Header/header.css";
import "../components/Footer/footer.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cartprovider from "../context/CartContext";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>OLIVÉA | A Softer Kind of Luxury</title>
                <meta
                    name="description"
                    content="Discover elegant fashion and accessories at OLIVÉA."
                />
            </Head>

            <Cartprovider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Cartprovider>
        </>
    );
}
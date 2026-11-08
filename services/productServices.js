class ProductServices {
    static async getProducts() {
        try {
            const response = await fetch("/api/products");

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const result = await response.json();

            return result.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
    }

    static async getProductById(id) {
        const products = await this.getProducts();

        for (let product of products) {
            if (product.id === Number(id)) {
                return product;
            }
        }

        return null;
    }
}

export default ProductServices;
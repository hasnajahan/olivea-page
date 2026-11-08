import data from "../../data/products";

export default function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({ data });
    }

    return res.status(405).json({
        message: "Method not allowed",
    });
}
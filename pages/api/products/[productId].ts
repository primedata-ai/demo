import {NextApiRequest, NextApiResponse} from "next";
import {IProduct} from "components/interface/IProduct";

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct>) {
  const {productId} = req.query
  res.status(200).json({
    id: "1",
    slug: productId.toString(),
    image: "/images/product-01.jpg",
    name: "Esprit Ruffle Shirt" || "",
    price: 30000000,
    category: "women" || "men" || "shoes" || "watches"
  })
}
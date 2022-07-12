import {NextApiRequest, NextApiResponse} from "next";
import {IProduct} from "components/interface/IProduct";

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
  res.status(200).json([
    {
      id: "1",
      slug: "prod-slug-1",
      image: "/images/product-01.jpg",
      name: "Esprit Ruffle Shirt" || "",
      price: 30000000,
      category: "women" || "men" || "shoes" || "watches"
    },
    {
      id: "2",
      slug: "prod-slug-2",
      image: "/images/product-02.jpg",
      name: "Esprit Ruffle Shirt 2" || "",
      price: 30000000,
      category: "women" || "men" || "shoes" || "watches"
    },
  ])
}
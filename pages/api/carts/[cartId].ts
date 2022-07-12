import {NextApiRequest, NextApiResponse} from "next";
import {ICart} from "components/interface/ICart";

export default function handler(req: NextApiRequest, res: NextApiResponse<ICart>) {
  const {cartId} = req.query
  res.status(200).json({
    id: "1",
    products: [
      {
        id: "1",
        slug: cartId.toString(),
        image: "/images/product-01.jpg",
        name: "Pants",
        price: 30000000,
        category: "women" || "men" || "shoes" || "watches",
        quantity: 1,
        total: 30000000
      },
      {
        id: "2",
        slug: cartId.toString(),
        image: "/images/product-02.jpg",
        name: "Shirt",
        price: 30000000,
        category: "women" || "men" || "shoes" || "watches",
        quantity: 2,
        total: 60000000
      },
    ],
    total: 90000000
  })
}
import type {NextApiRequest, NextApiResponse} from "next";
import {ICart} from "components/interface/ICart";

export default function cartHandler(req: NextApiRequest, res: NextApiResponse<ICart>) {
  const {cartId} = req.query
  const {method} = req

  let cartData = {
    id: "1",
    products: [
      {
        id: "1",
        slug: cartId?.toString(),
        image: "/images/product-01.jpg",
        name: "Pants",
        price: 30000000,
        category: "women" || "men" || "shoes" || "watches",
        quantity: 1,
        total: 30000000
      },
      {
        id: "2",
        slug: cartId?.toString(),
        image: "/images/product-02.jpg",
        name: "Shirt",
        price: 30000000,
        category: "women" || "men" || "shoes" || "watches",
        quantity: 2,
        total: 60000000
      },
    ],
    total: 90000000
  }

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(cartData)
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json(cartData)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
  res.status(200).json(cartData)
}
import type {NextApiRequest, NextApiResponse} from "next";
import {IProduct} from "components/interface/IProduct";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
  // products in JSON file for simplicity
  let products: IProduct[] = require('data/products.json');
  res.status(200).json(products);
}
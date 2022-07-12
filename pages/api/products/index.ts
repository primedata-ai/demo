import {NextApiRequest, NextApiResponse} from "next";
import {IProduct} from "components/interface/IProduct";

export default function handler(_req: NextApiRequest, res: NextApiResponse<IProduct[]>) {

  let listOfProd: IProduct[] = []
  for (let i = 1; i < 17; i++) {
    listOfProd.push({
      id: `${i}`,
      slug: `prod-slug-${i}`,
      image: i < 10 ? `/images/product-0${i}.jpg` : `/images/product-${i}.jpg`,
      name: "Esprit Ruffle Shirt" || "",
      price: 30000000,
      category: "women" || "men" || "shoes" || "watches"
    })
  }

  res.status(200).json(listOfProd);
}
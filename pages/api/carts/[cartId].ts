import type {NextApiRequest, NextApiResponse} from "next";
import {ICart} from "components/interface/ICart";
import {IProduct} from "components/interface/IProduct";
import {saveDataToFile} from "services/utils/FileService";
import {v4 as uuidv4} from 'uuid';

const getCartDatById = (cartId: string): ICart | undefined => {
  let listOfCarts: ICart[] = require("data/carts.json");
  return listOfCarts.find(x => x.id === cartId)
}

const addToCart = (cartId: string, product: IProduct) => {
  let cartData = getCartDatById(cartId);
  if (!cartData) {
    cartData = {
      id: uuidv4(),
      products: [],
      total: 0
    }
  }
  cartData.products.push({...product, quantity: 1, total: product.price});
  cartData.total = cartData.products.map(item => item.total).reduce((prev, next) => prev + next);
  updateListCart(cartData)
  return cartData;
}

const updateListCart = (cart: ICart): void => {
  let listOfCarts = require("data/carts.json");
  let ind = listOfCarts.find((x: ICart) => x.id === cart.id);

  if (ind >= 0) listOfCarts[ind] = cart;
  else listOfCarts = [cart];

  saveDataToFile("/carts.json", listOfCarts)
}

export default async function cartHandler(req: NextApiRequest, res: NextApiResponse<ICart | any>) {
  const {cartId} = req.query
  const {method, body: product} = req

  let cartData: ICart = {
    id: uuidv4(),
    products: [],
    total: 0
  }

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(cartData)
      break
    case 'PUT':
      let cartResp = cartId ? addToCart(cartId.toString(), product) : null
      // Update or create data in your database
      res.status(200).json(cartResp)
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}
import {IProduct} from "components/interface/IProduct";

interface IProductCart extends IProduct {
  quantity: number;
  total: number;
}

export interface ICart {
  id: string;
  products: IProductCart[];
  total: number;
}

type ShipInfo = {
  country: string;
  city: string;
  code: string;
  phone_number: string;
}

export type Order = {
  total: number;
  shipping: ShipInfo;
  voucher: string
}
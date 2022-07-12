import type {NextApiRequest, NextApiResponse} from "next";
import {IUser} from "components/interface/IUser";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<IUser[]>) {
  // users in JSON file for simplicity
  let users: IUser[] = require('data/users.json');
  res.status(200).json(users);
}
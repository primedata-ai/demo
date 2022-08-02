import type {NextApiRequest, NextApiResponse} from "next";
import {apiHandler} from "lib/api-handler";

function handler(_req: NextApiRequest, res: NextApiResponse<[]>) {
  res.status(200).json([]);
}

export default apiHandler(handler);
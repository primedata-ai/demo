import {NextApiRequest, NextApiResponse} from "next";
const jwt = require('jsonwebtoken');
import getConfig from 'next/config';

import { apiHandler } from 'lib/api-handler';
import {IUser} from "components/interface/IUser";
import {v4 as uuidv4} from "uuid";
import {saveDataToFile} from "services/utils/FileService";

const { serverRuntimeConfig } = getConfig();

// users in JSON file for simplicity, store in a db for production applications
const users = require('data/users.json');

function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case 'POST':
      return signUp();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  function signUp() {
    const { name, email, password } = req.body;
    const userCheck = users.find((u: IUser) => u.email === email);
    if (userCheck) throw new Error('Email is existed');

    let user: IUser = {
      id: uuidv4(),
      email: email,
      full_name: name,
      password: password,
    }

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: email }, serverRuntimeConfig.secret, { expiresIn: '1d' });
    let userRegister = {...user, token}
    users.push(userRegister)
    saveDataToFile("/users.json", users)
    // return basic user details and token
    userRegister.password = uuidv4();
    return res.status(200).json(userRegister);
  }
}

export default apiHandler(handler);
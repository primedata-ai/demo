import type {NextApiRequest, NextApiResponse} from "next";
import {IContact} from "components/interface/IContact";
import {v4 as uuidv4} from 'uuid';
import moment from "moment";
import {saveDataToFile} from "services/utils/FileService";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const {method, body: contact} = req;

  switch (method) {
    case 'GET':
      let contacts: IContact[] = require('data/contacts.json');
      res.status(200).json(contacts);
      break
    case 'POST':
      let cResp: IContact = collectAContactForm(contact);
      res.status(200).json(cResp)
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}

const collectAContactForm = (payload: IContact): IContact => {
  let contacts = require("data/contacts.json");
  let contactData = {
    ...payload,
    id: uuidv4(),
    created_at: moment().unix()
  }
  contacts.push(contactData);
  saveDataToFile("/contacts.json", contacts);
  return contactData;
}
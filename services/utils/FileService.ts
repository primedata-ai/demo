import path from 'path';
import fs, { promises as fsPromise } from 'fs';

export const saveDataToFile = (fileName: string, data: any) => {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "data");
  return fs.writeFileSync(jsonDirectory + fileName, JSON.stringify(data, null, 4));
}

export const getDataFromFile = async (fileName: string) => {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "data");

  //Read the json data file data.json
  let jsonString = await fsPromise.readFile(jsonDirectory + fileName, 'utf8');

  return JSON.parse(jsonString)
}
import en from "./en.json";
import vi from "./vi.json";

export type TLang = string | "en" | "vi";

export interface ILangObject {
  [key: TLang]: any;
}

const langs: ILangObject = {
  en: en,
  vi: vi,
};
export default langs;

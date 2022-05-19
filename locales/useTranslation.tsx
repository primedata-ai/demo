import { useRouter } from "next/router";
import langs from "./lang";

export const DEFAULT_KEY = "default.error";

const useTranslation = () => {
  const router = useRouter();
  const getActiveLocale = (): string => {
    return router.locale ? router.locale : "vi";
  }

  const activeLang = getActiveLocale();

  const findValue = (dict: any, key: string[]): any => {
    if (key?.length === 0) 
      return dict;
    const firstKey: string = key?.[0];
    if (dict?.hasOwnProperty(firstKey)) {
      return findValue(dict[firstKey], key.splice(1));
    }
    else 
      return langs[activeLang][DEFAULT_KEY]; 
  }

  const t = (key: string): string => {
    const dictLang: Object = langs[activeLang];
    const splitKey: string[] = key.split(".");
    const value: string = findValue(dictLang, splitKey); 
    return value;
  }

  return {
    t, 
    getActiveLocale
  }
}

export default useTranslation;
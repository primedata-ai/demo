import axios, {CancelTokenSource} from "axios";
import {getTokenAuthCurrent} from "services/UserService";

export const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "access-control-request-origin": "*",
  "Access-Control-Allow-Origin": "*",
};

export const callApi = (endpoint: string, method: string, body: any, cancelTokenSource: CancelTokenSource | null) => {
  let access_token: string | null = getTokenAuthCurrent();
  return axios({
    url: window.location.origin + `/api/${endpoint}`,
    method: method ? method : "GET",
    headers: {
      ...header,
      Authorization: "Bearer " + access_token,
    },
    data: body,
    cancelToken: cancelTokenSource?.token,
  })
    .then((res) => {
     return res;
    })
    .catch((err) => {
      return err.response;
    });
}


/**
 * Convert "/campaigns/:<paramName1>/:<paramName2>/config" to "/campaigns/<paramValue2>/<paramValue2>/config";
 * @param url: the link endpoint api has param name variable
 * @param params: value list to replace for param name
 * @returns {string}: the endpoint api
 */
export const convertUrlParamToEndpoint = (url: string, ...params: any): string => {
  if (!url) return "";

  let i = 0;
  const pattern = /:(\w+)/gm;
  return url.replace(pattern, (matched) => matched.replace(matched, params[i++]));
};
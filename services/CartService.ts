import {AxiosPromise} from "axios";
import {callApi, convertUrlParamToEndpoint} from "services/callApi";
import {API_ENDPOINT} from "services/ApiEndpoint";

export const getCartById = (userId: string): AxiosPromise => {
  let endpoint = convertUrlParamToEndpoint(API_ENDPOINT.GET_CART_BY_ID , userId);
  return callApi(endpoint, 'GET', null, null)
}
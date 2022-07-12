import {AxiosPromise} from "axios";
import {callApi, convertUrlParamToEndpoint} from "services/callApi";
import {API_ENDPOINT} from "services/ApiEndpoint";

export const getProducts = (): AxiosPromise => {
  return callApi(API_ENDPOINT.GET_PRODUCT, 'GET', null, null);
}

export const getProductById = (productId: string): AxiosPromise => {
  let endpoint = convertUrlParamToEndpoint(API_ENDPOINT.GET_PRODUCT_BY_ID , productId);
  return callApi(endpoint, 'GET', null, null)
}
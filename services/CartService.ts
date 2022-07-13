import {AxiosPromise} from "axios";
import {callApi, convertUrlParamToEndpoint} from "services/callApi";
import {API_ENDPOINT} from "services/ApiEndpoint";
import {IProduct} from "components/interface/IProduct";
import {getCurrentUserAuth} from "services/UserService";

export const getCartById = (userId: string): AxiosPromise => {
  let endpoint = convertUrlParamToEndpoint(API_ENDPOINT.GET_CART_BY_ID , userId);
  return callApi(endpoint, 'GET', null, null)
}

export const addToCart = (product: IProduct): AxiosPromise => {
  let userId = getCurrentUserAuth();
  let endpoint = convertUrlParamToEndpoint(API_ENDPOINT.UPDATE_CART , userId);
  return callApi(endpoint, 'PUT', product, null)
}
import {AxiosPromise} from "axios";
import {callApi} from "services/callApi";
import {API_ENDPOINT} from "services/ApiEndpoint";
import {IContact} from "components/interface/IContact";
import {getCurrentUserAuth} from "services/UserService";
import {contact_form_submitted, LeadFormSubmitted} from "lib/track";

export const postSubmitContact = (payload: IContact): AxiosPromise => {
  payload.user_id = getCurrentUserAuth();
  contact_form_submitted(payload);
  LeadFormSubmitted(payload);
  return callApi(API_ENDPOINT.SUBMIT_CONTACT, 'POST', payload, null);
}
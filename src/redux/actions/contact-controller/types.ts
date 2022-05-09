import { EContactControllerAction } from '@/redux/actions/contact-controller/constants';
import {
  TBodyPostAgent,
  TBodyPostContact,
  TPostAgentResponse,
  TPostContactResponse,
} from '@/services/api/contact-controller/types';

export type TPostContactRequest = {
  type: EContactControllerAction.POST_CONTACT_REQUEST;
  payload: {
    body: TBodyPostContact;
    cb?: (response: TPostContactResponse) => void;
  };
};

export type TPostContactSuccess = {
  type: EContactControllerAction.POST_CONTACT_SUCCESS;
  payload: { response: TPostContactResponse };
};

export type TPostContactFailed = { type: EContactControllerAction.POST_CONTACT_FAILED; payload: { error: unknown } };

export type TPostAgentRequest = {
  type: EContactControllerAction.POST_AGENT_REQUEST;
  payload: {
    body: TBodyPostAgent;
    cb?: (response: TPostAgentResponse) => void;
  };
};

export type TPostAgentSuccess = {
  type: EContactControllerAction.POST_AGENT_SUCCESS;
  payload: { response: TPostAgentResponse };
};

export type TPostAgentFailed = { type: EContactControllerAction.POST_AGENT_FAILED; payload: { error: unknown } };

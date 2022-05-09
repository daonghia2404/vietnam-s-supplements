import { createActionCreator } from 'deox';

import { EContactControllerAction } from '@/redux/actions/contact-controller/constants';
import {
  TBodyPostAgent,
  TBodyPostContact,
  TPostAgentResponse,
  TPostContactResponse,
} from '@/services/api/contact-controller/types';
import {
  TPostContactRequest,
  TPostContactSuccess,
  TPostContactFailed,
  TPostAgentFailed,
  TPostAgentRequest,
  TPostAgentSuccess,
} from '@/redux/actions/contact-controller/types';

export const postContactAction = {
  request: createActionCreator(
    EContactControllerAction.POST_CONTACT_REQUEST,
    (resolve) =>
      (body: TBodyPostContact, cb?: (response: TPostContactResponse) => void): TPostContactRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EContactControllerAction.POST_CONTACT_SUCCESS,
    (resolve) =>
      (response: TPostContactResponse): TPostContactSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EContactControllerAction.POST_CONTACT_FAILED,
    (resolve) =>
      (error: unknown): TPostContactFailed =>
        resolve({ error }),
  ),
};

export const postAgentAction = {
  request: createActionCreator(
    EContactControllerAction.POST_AGENT_REQUEST,
    (resolve) =>
      (body: TBodyPostAgent, cb?: (response: TPostAgentResponse) => void): TPostAgentRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EContactControllerAction.POST_AGENT_SUCCESS,
    (resolve) =>
      (response: TPostAgentResponse): TPostAgentSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EContactControllerAction.POST_AGENT_FAILED,
    (resolve) =>
      (error: unknown): TPostAgentFailed =>
        resolve({ error }),
  ),
};

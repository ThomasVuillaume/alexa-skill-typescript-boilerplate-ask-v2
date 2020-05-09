import { RequestHandler } from 'ask-sdk-core';
import { Response, SessionEndedRequest } from 'ask-sdk-model';
import { HandlerInputWithTranslation } from '../i18n/customTypes/Types';

export class SessionEndedHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInputWithTranslation): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    }

    handle(handlerInput: HandlerInputWithTranslation): Response {
        console.log(
            `Session ended with reason: ${(handlerInput.requestEnvelope.request as SessionEndedRequest).reason}`,
        );
        return handlerInput.responseBuilder.getResponse();
    }
}

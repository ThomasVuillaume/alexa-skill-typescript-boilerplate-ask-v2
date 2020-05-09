import { RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
import { HandlerInputWithTranslation } from '../i18n/customTypes/Types';

export class LaunchHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInputWithTranslation): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    }

    handle(handlerInput: HandlerInputWithTranslation): Response {
        const speechText = handlerInput.t('LAUNCH_TEXT');
        const cardTitle = handlerInput.t('SIMPLE_CARD_TITLE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(cardTitle, speechText)
            .getResponse();
    }
}

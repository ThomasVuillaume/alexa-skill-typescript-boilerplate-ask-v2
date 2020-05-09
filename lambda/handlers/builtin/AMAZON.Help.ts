import { RequestHandler } from 'ask-sdk-core';
import { HandlerInputWithTranslation } from '../../i18n/customTypes/Types';
import { Response } from 'ask-sdk-model';

export class BuiltinAmazonHelpHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInputWithTranslation): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    }

    handle(handlerInput: HandlerInputWithTranslation): Response {
        const speechText = handlerInput.t('HELP_RESPONSE');
        const cardTitle = handlerInput.t('SIMPLE_CARD_TITLE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(cardTitle, speechText)
            .getResponse();
    }
}

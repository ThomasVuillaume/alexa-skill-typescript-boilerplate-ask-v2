import { HandlerInput } from 'ask-sdk-core';
import { TFunction } from 'i18next';

export interface HandlerInputWithTranslation extends HandlerInput {
    t: TFunction;
}

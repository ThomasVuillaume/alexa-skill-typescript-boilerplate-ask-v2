import { RequestInterceptor, getLocale } from 'ask-sdk-core';
import i18n, { TFunction, TFunctionKeys, TOptions } from 'i18next';
import { HandlerInputWithTranslation } from '../i18n/customTypes/Types';
import { langStrings } from '../i18n/langStrings';

export class RequestLoggingInterceptor implements RequestInterceptor {
    process(handlerInput: HandlerInputWithTranslation): Promise<void> {
        return i18n
            .init({
                lng: getLocale(handlerInput.requestEnvelope),
                resources: langStrings,
            })
            .then((t: TFunction) => {
                handlerInput.t = (key: TFunctionKeys, defaultValue?: string, options?: TOptions) =>
                    t(key, defaultValue, options);
            });
    }
}

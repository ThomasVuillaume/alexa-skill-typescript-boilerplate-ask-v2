import { HandlerInput, ResponseInterceptor } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export class ResponseLoggingInterceptor implements ResponseInterceptor {
    process(handlerInput: HandlerInput, response?: Response): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log('Outgoing response:\n' + JSON.stringify(response));
            resolve();
        });
    }
}

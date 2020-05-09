import * as Alexa from 'ask-sdk-core';

import { BuiltinAmazonCancelHandler } from './handlers/builtin/AMAZON.Cancel';
import { BuiltinAmazonHelpHandler } from './handlers/builtin/AMAZON.Help';
import { BuiltinAmazonStopHandler } from './handlers/builtin/AMAZON.Stop';
import { LaunchHandler } from './handlers/Launch';
import { HelloWorldHandler } from './handlers/HelloWorld';
import { SessionEndedHandler } from './handlers/SessionEndedRequest';

import { CustomErrorHandler } from './handlers/Error';
import { RequestLoggingInterceptor } from './interceptors/RequestLogging';
import { ResponseLoggingInterceptor } from './interceptors/ResponseLogging';

function buildLambdaSkill(): any {
    return Alexa.SkillBuilders.custom()
        .addRequestHandlers(
            new LaunchHandler(),
            new HelloWorldHandler(),
            new BuiltinAmazonCancelHandler(),
            new BuiltinAmazonHelpHandler(),
            new BuiltinAmazonStopHandler(),
            new SessionEndedHandler(),
        )
        .addRequestInterceptors(new RequestLoggingInterceptor())
        .addResponseInterceptors(new ResponseLoggingInterceptor())
        .addErrorHandlers(new CustomErrorHandler())
        .lambda();
}

export const handler = buildLambdaSkill();

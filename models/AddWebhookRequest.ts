/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class AddWebhookRequest {
    /**
    * The endpoint the POST request will be sent to
    */
    'hookUrl': string;
    /**
    * The trigger which will cause the webhook to be sent
    */
    'trigger': AddWebhookRequestTriggerEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hookUrl",
            "baseName": "hook_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "trigger",
            "baseName": "trigger",
            "type": "AddWebhookRequestTriggerEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddWebhookRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AddWebhookRequestTriggerEnum {
    OrderCreated = 'order.created',
    OrderProcessed = 'order.processed',
    OrderCanceled = 'order.canceled',
    OrderRefunded = 'order.refunded',
    PaymentLinkCreated = 'payment_link.created',
    PaymentLinkPaid = 'payment_link.paid'
}


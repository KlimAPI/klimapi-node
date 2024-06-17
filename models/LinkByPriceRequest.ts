/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class LinkByPriceRequest {
    /**
    * The total of the compensation in your given currency **incl. VAT**. Minimum order is 0.5 in your given currency.
    */
    'priceAmount': number;
    /**
    * Choose if the customer should be allowed to change the amount.
    */
    'changeAllowed'?: boolean;
    /**
    * The URL the customer is redirected to after the successful compensation.
    */
    'successUrl': string;
    /**
    * The URL the customer is redirected to after a failed or aborted compensation.
    */
    'cancelUrl': string;
    /**
    * The amount of pending Orders you want to receive. This is especially useful if you want to offer your customers several different projects for their compensation.
    */
    'orderCount'?: number;
    /**
    * Add additional queryable information to the order as key-value pairs
    */
    'metadata'?: Array<{ [key: string]: any; }>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "priceAmount",
            "baseName": "price_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "changeAllowed",
            "baseName": "change_allowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "successUrl",
            "baseName": "success_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "cancelUrl",
            "baseName": "cancel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderCount",
            "baseName": "order_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "Array<{ [key: string]: any; }>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkByPriceRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


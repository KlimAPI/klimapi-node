/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BuyAmount {
    /**
    * The amount of kg CO<sub>2</sub>e the compensation should provide
    */
    'kgCO2e': number;
    /**
    * The name which should be associated with the compensation
    */
    'recipientName': string;
    /**
    * If a valid e-mail address is provided, we will send the certificate to this address
    */
    'recipientEmail'?: string;
    /**
    * Timestamp of when the certificate should be send to the customer in ISO 8601 format (UTC). Defaults to the current timestamp.
    */
    'sendAt'?: Date;
    /**
    * Set an optional price limit. if the order would exceed the limit a error will be thrown. Set the limit in the given currency.
    */
    'priceLimit'?: number;
    /**
    * Add additional queryable information to the order as key-value pairs
    */
    'metadata'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        },
        {
            "name": "recipientName",
            "baseName": "recipient_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipientEmail",
            "baseName": "recipient_email",
            "type": "string",
            "format": ""
        },
        {
            "name": "sendAt",
            "baseName": "send_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "priceLimit",
            "baseName": "price_limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BuyAmount.attributeTypeMap;
    }

    public constructor() {
    }
}


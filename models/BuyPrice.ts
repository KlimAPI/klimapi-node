/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BuyPrice {
    /**
    * The total of the compensation in your given currency **excl. VAT**. Minimum order is 0.5 in your given currency.
    */
    'priceAmount': number;
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "Array<{ [key: string]: any; }>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BuyPrice.attributeTypeMap;
    }

    public constructor() {
    }
}


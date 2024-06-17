/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class LinkByCalculationRequest {
    /**
    * An Array of [Calculation Options](/resources/factors).
    */
    'calculationOptions': Array<any>;
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
    /**
    * Normally, the calculation results are rounded to the nearest whole number. Specify here how many decimal places you would like to receive in addition. This only applies to calculation results, compensations are always made in whole kilograms
    */
    'fractionalDigits'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "calculationOptions",
            "baseName": "calculation_options",
            "type": "Array<any>",
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
        },
        {
            "name": "fractionalDigits",
            "baseName": "fractional_digits",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkByCalculationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


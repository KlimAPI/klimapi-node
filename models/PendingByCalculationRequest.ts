/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class PendingByCalculationRequest {
    /**
    * An Array of [Calculation Options](/resources/factors).
    */
    'calculationOptions': Array<any>;
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
        return PendingByCalculationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


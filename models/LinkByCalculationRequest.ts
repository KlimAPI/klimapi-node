/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { PendingByCalculationRequestCalculationOptionsInner } from '../models/PendingByCalculationRequestCalculationOptionsInner';
import { HttpFile } from '../http/http';

export class LinkByCalculationRequest {
    /**
    * An Array of [Calculation Options](https://klimapi.com/resources/factors). See the full list of supported options [here](https://klimapi.com/resources/factors).
    */
    'calculationOptions': Array<PendingByCalculationRequestCalculationOptionsInner>;
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
    'metadata'?: { [key: string]: string; };
    /**
    * Normally, the calculation results are rounded to the nearest whole number. Specify here how many decimal places you would like to receive in addition. This only applies to calculation results, compensations are always made in whole kilograms
    */
    'fractionalDigits'?: number;
    /**
    * With `default` we will automatically provide payment methods based on the customers location, use `invoice` to enable payment by invoice for the given link. Please note that `invoice` bank transfer is only available if **X-CURRENCY** is set to `EUR`. The invoice can always be paid by card.
    */
    'paymentType'?: LinkByCalculationRequestPaymentTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "calculationOptions",
            "baseName": "calculation_options",
            "type": "Array<PendingByCalculationRequestCalculationOptionsInner>",
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
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "fractionalDigits",
            "baseName": "fractional_digits",
            "type": "number",
            "format": ""
        },
        {
            "name": "paymentType",
            "baseName": "payment_type",
            "type": "LinkByCalculationRequestPaymentTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkByCalculationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum LinkByCalculationRequestPaymentTypeEnum {
    Default = 'default',
    Invoice = 'invoice'
}


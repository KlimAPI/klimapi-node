/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { CheckoutLinkCalculated } from '../models/CheckoutLinkCalculated';
import { HttpFile } from '../http/http';

export class CheckoutLinksCalculated {
    'checkoutLinks'?: Array<CheckoutLinkCalculated>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checkoutLinks",
            "baseName": "checkout_links",
            "type": "Array<CheckoutLinkCalculated>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckoutLinksCalculated.attributeTypeMap;
    }

    public constructor() {
    }
}


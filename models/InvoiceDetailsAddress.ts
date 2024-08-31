/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

/**
* The customer’s address.
*/
export class InvoiceDetailsAddress {
    /**
    * City, district, suburb, town, or village.
    */
    'city'?: string;
    /**
    * Two-letter country code (ISO 3166-1 alpha-2).
    */
    'country'?: string;
    /**
    * Address line 1 (e.g., street, PO Box, or company name).
    */
    'line1'?: string;
    /**
    * Address line 2 (e.g., apartment, suite, unit, or building).
    */
    'line2'?: string;
    /**
    * ZIP or postal code.
    */
    'postalCode'?: string;
    /**
    * State, county, province, or region.
    */
    'state'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceDetailsAddress.attributeTypeMap;
    }

    public constructor() {
    }
}


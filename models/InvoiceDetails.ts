/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { InvoiceDetailsAddress } from '../models/InvoiceDetailsAddress';
import { InvoiceDetailsTaxId } from '../models/InvoiceDetailsTaxId';
import { HttpFile } from '../http/http';

/**
* Required with **billing_type** = `invoice`
*/
export class InvoiceDetails {
    /**
    * The customer’s full name or business name
    */
    'name': string;
    /**
    * The customer’s email address
    */
    'email': string;
    'address': InvoiceDetailsAddress;
    'taxId'?: InvoiceDetailsTaxId;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "InvoiceDetailsAddress",
            "format": ""
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
            "type": "InvoiceDetailsTaxId",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


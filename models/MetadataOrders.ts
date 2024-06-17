/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { Order } from '../models/Order';
import { HttpFile } from '../http/http';

export class MetadataOrders {
    'orders'?: Array<Order>;
    'total'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orders",
            "baseName": "orders",
            "type": "Array<Order>",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetadataOrders.attributeTypeMap;
    }

    public constructor() {
    }
}


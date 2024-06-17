/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { PendingOrder } from '../models/PendingOrder';
import { HttpFile } from '../http/http';

export class PendingOrders {
    'pendingOrders'?: Array<PendingOrder>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pendingOrders",
            "baseName": "pending_orders",
            "type": "Array<PendingOrder>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PendingOrders.attributeTypeMap;
    }

    public constructor() {
    }
}


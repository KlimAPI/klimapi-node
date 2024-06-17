/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { PendingOrderCalculated } from '../models/PendingOrderCalculated';
import { HttpFile } from '../http/http';

export class PendingOrdersCalculated {
    'pendingOrders'?: Array<PendingOrderCalculated>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pendingOrders",
            "baseName": "pending_orders",
            "type": "Array<PendingOrderCalculated>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PendingOrdersCalculated.attributeTypeMap;
    }

    public constructor() {
    }
}


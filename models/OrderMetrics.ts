/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class OrderMetrics {
    /**
    * The sum of all orders
    */
    'count'?: number;
    /**
    * Returns the total sum of money spend in your invoice currency
    */
    'total'?: number;
    /**
    * The total amount of kg CO<sub>2</sub>e compensated.
    */
    'kgCO2e'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderMetrics.attributeTypeMap;
    }

    public constructor() {
    }
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { CartResultCalculationResultsInner } from '../models/CartResultCalculationResultsInner';
import { CartResultSettings } from '../models/CartResultSettings';
import { PendingOrder } from '../models/PendingOrder';
import { HttpFile } from '../http/http';

export class CartResult {
    /**
    * The total amount of kg CO<sub>2</sub>e calculated.
    */
    'kgCO2e'?: number;
    'settings'?: CartResultSettings;
    /**
    * The calculation results
    */
    'calculationResults'?: Array<CartResultCalculationResultsInner>;
    'orders'?: Array<PendingOrder>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "CartResultSettings",
            "format": ""
        },
        {
            "name": "calculationResults",
            "baseName": "calculation_results",
            "type": "Array<CartResultCalculationResultsInner>",
            "format": ""
        },
        {
            "name": "orders",
            "baseName": "orders",
            "type": "Array<PendingOrder>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartResult.attributeTypeMap;
    }

    public constructor() {
    }
}


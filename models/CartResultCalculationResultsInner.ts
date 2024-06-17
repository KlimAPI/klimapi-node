/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class CartResultCalculationResultsInner {
    /**
    * A unique identifier for the product
    */
    'productId'?: string;
    /**
    * The source of the calculation
    */
    'source'?: CartResultCalculationResultsInnerSourceEnum;
    /**
    * The amount of kg CO<sub>2</sub>e calculated for the given product.
    */
    'kgCO2e'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "CartResultCalculationResultsInnerSourceEnum",
            "format": ""
        },
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartResultCalculationResultsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CartResultCalculationResultsInnerSourceEnum {
    Factor = 'factor',
    Custom = 'custom',
    Fallback = 'fallback'
}


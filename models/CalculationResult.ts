/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class CalculationResult {
    /**
    * The calculated Amount of CO<sub>2</sub> in Kilogram.
    */
    'kgCO2e'?: number;
    /**
    * The type of the calculation
    */
    'type'?: string;
    /**
    * The activity of the calculation
    */
    'activity'?: string;
    /**
    * The specification of the calculation
    */
    'specification'?: string;
    /**
    * The detail of the calculation
    */
    'detail'?: string;
    /**
    * The value of the calculation
    */
    'value'?: number;
    /**
    * The unit of the calculation
    */
    'unit'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "string",
            "format": ""
        },
        {
            "name": "specification",
            "baseName": "specification",
            "type": "string",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CalculationResult.attributeTypeMap;
    }

    public constructor() {
    }
}


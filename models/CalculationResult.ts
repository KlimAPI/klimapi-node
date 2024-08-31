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
    /**
    * The unique identifier of the emission factor the calculation is based on
    */
    'emissionFactorId'?: string;
    /**
    * ISO 8601 formatted timestamp of the latest update for the given emission factor
    */
    'emissionFactorLastUpdated'?: string;

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
        },
        {
            "name": "emissionFactorId",
            "baseName": "emission_factor_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "emissionFactorLastUpdated",
            "baseName": "emission_factor_last_updated",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CalculationResult.attributeTypeMap;
    }

    public constructor() {
    }
}


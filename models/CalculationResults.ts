/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { CalculationResult } from '../models/CalculationResult';
import { HttpFile } from '../http/http';

export class CalculationResults {
    /**
    * The calculated Amount of CO<sub>2</sub> in Kilogram.
    */
    'kgCO2e'?: number;
    /**
    * The unique identifier of the calculation
    */
    'calculationId'?: string;
    'results'?: Array<CalculationResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        },
        {
            "name": "calculationId",
            "baseName": "calculation_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CalculationResult>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CalculationResults.attributeTypeMap;
    }

    public constructor() {
    }
}


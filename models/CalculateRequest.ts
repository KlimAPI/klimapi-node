/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { PendingByCalculationRequestCalculationOptionsInner } from '../models/PendingByCalculationRequestCalculationOptionsInner';
import { HttpFile } from '../http/http';

export class CalculateRequest {
    /**
    * An Array of [Calculation Options](https://klimapi.com/resources/factors). See the full list of supported options [here](https://klimapi.com/resources/factors).
    */
    'calculationOptions': Array<PendingByCalculationRequestCalculationOptionsInner>;
    /**
    * Normally, the calculation results are rounded to the nearest whole number. Specify here how many decimal places you would like to receive in addition. This only applies to calculation results, compensations are always made in whole kilograms
    */
    'fractionalDigits'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "calculationOptions",
            "baseName": "calculation_options",
            "type": "Array<PendingByCalculationRequestCalculationOptionsInner>",
            "format": ""
        },
        {
            "name": "fractionalDigits",
            "baseName": "fractional_digits",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CalculateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


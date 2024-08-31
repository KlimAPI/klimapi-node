/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FuelsSolidFuelsWeight {
    'type': FuelsSolidFuelsWeightTypeEnum;
    'activity'?: string;
    'specification'?: FuelsSolidFuelsWeightSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FuelsSolidFuelsWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FuelsSolidFuelsWeightTypeEnum",
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
            "type": "FuelsSolidFuelsWeightSpecificationEnum",
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
            "type": "FuelsSolidFuelsWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FuelsSolidFuelsWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FuelsSolidFuelsWeightTypeEnum {
    Fuels = 'fuels'
}
export enum FuelsSolidFuelsWeightSpecificationEnum {
    CoalIndustrial = 'coal_industrial',
    CoalElectricityGeneration = 'coal_electricity_generation',
    CoalDomestic = 'coal_domestic',
    CokingCoal = 'coking_coal',
    PetroleumCoke = 'petroleum_coke',
    CoalElectricityGenerationHomeProducedCoalOnly = 'coal_electricity_generation-home_produced_coal_only',
    Average = 'average'
}
export enum FuelsSolidFuelsWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


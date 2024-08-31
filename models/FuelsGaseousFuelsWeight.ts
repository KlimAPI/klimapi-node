/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FuelsGaseousFuelsWeight {
    'type': FuelsGaseousFuelsWeightTypeEnum;
    'activity'?: string;
    'specification'?: FuelsGaseousFuelsWeightSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FuelsGaseousFuelsWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FuelsGaseousFuelsWeightTypeEnum",
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
            "type": "FuelsGaseousFuelsWeightSpecificationEnum",
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
            "type": "FuelsGaseousFuelsWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FuelsGaseousFuelsWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FuelsGaseousFuelsWeightTypeEnum {
    Fuels = 'fuels'
}
export enum FuelsGaseousFuelsWeightSpecificationEnum {
    Butane = 'butane',
    Cng = 'cng',
    Lng = 'lng',
    Lpg = 'lpg',
    NaturalGas = 'natural_gas',
    NaturalGas100MineralBlend = 'natural_gas_100%_mineral_blend',
    OtherPetroleumGas = 'other_petroleum_gas',
    Propane = 'propane',
    Average = 'average'
}
export enum FuelsGaseousFuelsWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


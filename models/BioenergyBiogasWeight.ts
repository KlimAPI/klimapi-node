/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BioenergyBiogasWeight {
    'type': BioenergyBiogasWeightTypeEnum;
    'activity'?: string;
    'specification'?: BioenergyBiogasWeightSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: BioenergyBiogasWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BioenergyBiogasWeightTypeEnum",
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
            "type": "BioenergyBiogasWeightSpecificationEnum",
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
            "type": "BioenergyBiogasWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BioenergyBiogasWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BioenergyBiogasWeightTypeEnum {
    Bioenergy = 'bioenergy'
}
export enum BioenergyBiogasWeightSpecificationEnum {
    LandfillGas = 'landfill_gas',
    Average = 'average'
}
export enum BioenergyBiogasWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BioenergyBiomassWeight {
    'type': BioenergyBiomassWeightTypeEnum;
    'activity'?: string;
    'specification'?: BioenergyBiomassWeightSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: BioenergyBiomassWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BioenergyBiomassWeightTypeEnum",
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
            "type": "BioenergyBiomassWeightSpecificationEnum",
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
            "type": "BioenergyBiomassWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BioenergyBiomassWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BioenergyBiomassWeightTypeEnum {
    Bioenergy = 'bioenergy'
}
export enum BioenergyBiomassWeightSpecificationEnum {
    WoodLogs = 'wood_logs',
    WoodChips = 'wood_chips',
    WoodPellets = 'wood_pellets',
    GrassStraw = 'grass/straw',
    Average = 'average'
}
export enum BioenergyBiomassWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


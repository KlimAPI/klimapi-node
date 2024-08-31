/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class WasteDisposalMetalWeight {
    'type': WasteDisposalMetalWeightTypeEnum;
    'activity'?: string;
    'specification'?: WasteDisposalMetalWeightSpecificationEnum;
    'detail'?: WasteDisposalMetalWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: WasteDisposalMetalWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WasteDisposalMetalWeightTypeEnum",
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
            "type": "WasteDisposalMetalWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "WasteDisposalMetalWeightDetailEnum",
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
            "type": "WasteDisposalMetalWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WasteDisposalMetalWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WasteDisposalMetalWeightTypeEnum {
    WasteDisposal = 'waste_disposal'
}
export enum WasteDisposalMetalWeightSpecificationEnum {
    MetalaluminiumCansAndFoilExclForming = 'metal:aluminium_cans_and_foil_excl._forming',
    MetalmixedCans = 'metal:mixed_cans',
    MetalscrapMetal = 'metal:scrap_metal',
    MetalsteelCans = 'metal:steel_cans',
    Average = 'average'
}
export enum WasteDisposalMetalWeightDetailEnum {
    OpenLoop = 'open-loop',
    ClosedLoop = 'closed-loop',
    Combustion = 'combustion',
    Landfill = 'landfill',
    Average = 'average'
}
export enum WasteDisposalMetalWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


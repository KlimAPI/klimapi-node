/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class MaterialUseMetalWeight {
    'type': MaterialUseMetalWeightTypeEnum;
    'activity'?: string;
    'specification'?: MaterialUseMetalWeightSpecificationEnum;
    'detail'?: MaterialUseMetalWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: MaterialUseMetalWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MaterialUseMetalWeightTypeEnum",
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
            "type": "MaterialUseMetalWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "MaterialUseMetalWeightDetailEnum",
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
            "type": "MaterialUseMetalWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MaterialUseMetalWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MaterialUseMetalWeightTypeEnum {
    MaterialUse = 'material_use'
}
export enum MaterialUseMetalWeightSpecificationEnum {
    MetalaluminiumCansAndFoilExclForming = 'metal:aluminium_cans_and_foil_excl._forming',
    MetalmixedCans = 'metal:mixed_cans',
    MetalscrapMetal = 'metal:scrap_metal',
    MetalsteelCans = 'metal:steel_cans',
    Average = 'average'
}
export enum MaterialUseMetalWeightDetailEnum {
    PrimaryMaterialProduction = 'primary_material_production',
    ClosedLoopSource = 'closed-loop_source',
    Average = 'average'
}
export enum MaterialUseMetalWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


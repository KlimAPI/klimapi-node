/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class MaterialUseOrganicWeight {
    'type': MaterialUseOrganicWeightTypeEnum;
    'activity'?: string;
    'specification'?: MaterialUseOrganicWeightSpecificationEnum;
    'detail'?: MaterialUseOrganicWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: MaterialUseOrganicWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MaterialUseOrganicWeightTypeEnum",
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
            "type": "MaterialUseOrganicWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "MaterialUseOrganicWeightDetailEnum",
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
            "type": "MaterialUseOrganicWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MaterialUseOrganicWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MaterialUseOrganicWeightTypeEnum {
    MaterialUse = 'material_use'
}
export enum MaterialUseOrganicWeightSpecificationEnum {
    CompostDerivedFromGardenWaste = 'compost_derived_from_garden_waste',
    CompostDerivedFromFoodAndGardenWaste = 'compost_derived_from_food_and_garden_waste',
    Average = 'average'
}
export enum MaterialUseOrganicWeightDetailEnum {
    PrimaryMaterialProduction = 'primary_material_production'
}
export enum MaterialUseOrganicWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


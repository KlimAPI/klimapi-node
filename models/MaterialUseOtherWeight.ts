/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class MaterialUseOtherWeight {
    'type': MaterialUseOtherWeightTypeEnum;
    'activity'?: string;
    'specification'?: MaterialUseOtherWeightSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: MaterialUseOtherWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: MaterialUseOtherWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MaterialUseOtherWeightTypeEnum",
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
            "type": "MaterialUseOtherWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "MaterialUseOtherWeightDetailEnum",
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
            "type": "MaterialUseOtherWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MaterialUseOtherWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MaterialUseOtherWeightTypeEnum {
    MaterialUse = 'material_use'
}
export enum MaterialUseOtherWeightSpecificationEnum {
    Glass = 'glass',
    Clothing = 'clothing',
    FoodAndDrink = 'food_and_drink',
    Average = 'average'
}
export enum MaterialUseOtherWeightDetailEnum {
    PrimaryMaterialProduction = 'primary_material_production',
    ClosedLoopSource = 'closed-loop_source',
    Average = 'average',
    ReUsed = 're-used'
}
export enum MaterialUseOtherWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


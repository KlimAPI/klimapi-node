/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class MaterialUseConstructionWeight {
    'type': MaterialUseConstructionWeightTypeEnum;
    'activity'?: string;
    'specification'?: MaterialUseConstructionWeightSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: MaterialUseConstructionWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: MaterialUseConstructionWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MaterialUseConstructionWeightTypeEnum",
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
            "type": "MaterialUseConstructionWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "MaterialUseConstructionWeightDetailEnum",
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
            "type": "MaterialUseConstructionWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MaterialUseConstructionWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MaterialUseConstructionWeightTypeEnum {
    MaterialUse = 'material_use'
}
export enum MaterialUseConstructionWeightSpecificationEnum {
    Aggregates = 'aggregates',
    Asbestos = 'asbestos',
    Asphalt = 'asphalt',
    Bricks = 'bricks',
    Concrete = 'concrete',
    Insulation = 'insulation',
    Metals = 'metals',
    Soils = 'soils',
    MineralOil = 'mineral_oil',
    Plasterboard = 'plasterboard',
    Tyres = 'tyres',
    Wood = 'wood',
    Average = 'average'
}
export enum MaterialUseConstructionWeightDetailEnum {
    PrimaryMaterialProduction = 'primary_material_production',
    ReUsed = 're-used',
    ClosedLoopSource = 'closed-loop_source',
    Average = 'average'
}
export enum MaterialUseConstructionWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


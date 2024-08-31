/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class MaterialUsePaperWeight {
    'type': MaterialUsePaperWeightTypeEnum;
    'activity'?: string;
    'specification'?: MaterialUsePaperWeightSpecificationEnum;
    'detail'?: MaterialUsePaperWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: MaterialUsePaperWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MaterialUsePaperWeightTypeEnum",
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
            "type": "MaterialUsePaperWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "MaterialUsePaperWeightDetailEnum",
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
            "type": "MaterialUsePaperWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MaterialUsePaperWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MaterialUsePaperWeightTypeEnum {
    MaterialUse = 'material_use'
}
export enum MaterialUsePaperWeightSpecificationEnum {
    PaperAndBoardboard = 'paper_and_board:board',
    PaperAndBoardmixed = 'paper_and_board:mixed',
    PaperAndBoardpaper = 'paper_and_board:paper',
    Average = 'average'
}
export enum MaterialUsePaperWeightDetailEnum {
    PrimaryMaterialProduction = 'primary_material_production',
    ClosedLoopSource = 'closed-loop_source',
    Average = 'average'
}
export enum MaterialUsePaperWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


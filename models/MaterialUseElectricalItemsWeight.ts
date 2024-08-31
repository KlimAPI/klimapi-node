/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class MaterialUseElectricalItemsWeight {
    'type': MaterialUseElectricalItemsWeightTypeEnum;
    'activity'?: string;
    'specification'?: MaterialUseElectricalItemsWeightSpecificationEnum;
    'detail'?: MaterialUseElectricalItemsWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: MaterialUseElectricalItemsWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MaterialUseElectricalItemsWeightTypeEnum",
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
            "type": "MaterialUseElectricalItemsWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "MaterialUseElectricalItemsWeightDetailEnum",
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
            "type": "MaterialUseElectricalItemsWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MaterialUseElectricalItemsWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MaterialUseElectricalItemsWeightTypeEnum {
    MaterialUse = 'material_use'
}
export enum MaterialUseElectricalItemsWeightSpecificationEnum {
    ElectricalItemsFridgesAndFreezers = 'electrical_items-fridges_and_freezers',
    ElectricalItemsLarge = 'electrical_items-large',
    ElectricalItemsIt = 'electrical_items-it',
    ElectricalItemsSmall = 'electrical_items-small',
    BatteriesAlkaline = 'batteries-alkaline',
    BatteriesLiIon = 'batteries-li_ion',
    BatteriesNimh = 'batteries-nimh',
    Average = 'average'
}
export enum MaterialUseElectricalItemsWeightDetailEnum {
    PrimaryMaterialProduction = 'primary_material_production'
}
export enum MaterialUseElectricalItemsWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class WasteDisposalRefuseWeight {
    'type': WasteDisposalRefuseWeightTypeEnum;
    'activity'?: string;
    'specification'?: WasteDisposalRefuseWeightSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: WasteDisposalRefuseWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: WasteDisposalRefuseWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WasteDisposalRefuseWeightTypeEnum",
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
            "type": "WasteDisposalRefuseWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "WasteDisposalRefuseWeightDetailEnum",
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
            "type": "WasteDisposalRefuseWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WasteDisposalRefuseWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WasteDisposalRefuseWeightTypeEnum {
    WasteDisposal = 'waste_disposal'
}
export enum WasteDisposalRefuseWeightSpecificationEnum {
    HouseholdResidualWaste = 'household_residual_waste',
    OrganicfoodAndDrinkWaste = 'organic:food_and_drink_waste',
    OrganicgardenWaste = 'organic:garden_waste',
    OrganicmixedFoodAndGardenWaste = 'organic:mixed_food_and_garden_waste',
    CommercialAndIndustrialWaste = 'commercial_and_industrial_waste',
    Average = 'average'
}
export enum WasteDisposalRefuseWeightDetailEnum {
    Combustion = 'combustion',
    Landfill = 'landfill',
    Average = 'average',
    Composting = 'composting',
    AnaerobicDigestion = 'anaerobic_digestion'
}
export enum WasteDisposalRefuseWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class WasteDisposalElectricalItemsWeight {
    'type': WasteDisposalElectricalItemsWeightTypeEnum;
    'activity'?: string;
    'specification'?: WasteDisposalElectricalItemsWeightSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: WasteDisposalElectricalItemsWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: WasteDisposalElectricalItemsWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WasteDisposalElectricalItemsWeightTypeEnum",
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
            "type": "WasteDisposalElectricalItemsWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "WasteDisposalElectricalItemsWeightDetailEnum",
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
            "type": "WasteDisposalElectricalItemsWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WasteDisposalElectricalItemsWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WasteDisposalElectricalItemsWeightTypeEnum {
    WasteDisposal = 'waste_disposal'
}
export enum WasteDisposalElectricalItemsWeightSpecificationEnum {
    WeeeFridgesAndFreezers = 'weee-fridges_and_freezers',
    WeeeLarge = 'weee-large',
    WeeeMixed = 'weee-mixed',
    WeeeSmall = 'weee-small',
    Batteries = 'batteries',
    Average = 'average'
}
export enum WasteDisposalElectricalItemsWeightDetailEnum {
    OpenLoop = 'open-loop',
    Landfill = 'landfill',
    Average = 'average',
    Combustion = 'combustion'
}
export enum WasteDisposalElectricalItemsWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


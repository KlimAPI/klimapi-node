/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class WasteDisposalOtherWeight {
    'type': WasteDisposalOtherWeightTypeEnum;
    'activity'?: string;
    'specification'?: WasteDisposalOtherWeightSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: WasteDisposalOtherWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: WasteDisposalOtherWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WasteDisposalOtherWeightTypeEnum",
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
            "type": "WasteDisposalOtherWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "WasteDisposalOtherWeightDetailEnum",
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
            "type": "WasteDisposalOtherWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WasteDisposalOtherWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WasteDisposalOtherWeightTypeEnum {
    WasteDisposal = 'waste_disposal'
}
export enum WasteDisposalOtherWeightSpecificationEnum {
    Books = 'books',
    Glass = 'glass',
    Clothing = 'clothing',
    Average = 'average'
}
export enum WasteDisposalOtherWeightDetailEnum {
    ClosedLoop = 'closed-loop',
    Combustion = 'combustion',
    Composting = 'composting',
    Landfill = 'landfill',
    Average = 'average',
    OpenLoop = 'open-loop'
}
export enum WasteDisposalOtherWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


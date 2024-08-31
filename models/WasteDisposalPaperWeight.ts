/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class WasteDisposalPaperWeight {
    'type': WasteDisposalPaperWeightTypeEnum;
    'activity'?: string;
    'specification'?: WasteDisposalPaperWeightSpecificationEnum;
    'detail'?: WasteDisposalPaperWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: WasteDisposalPaperWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WasteDisposalPaperWeightTypeEnum",
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
            "type": "WasteDisposalPaperWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "WasteDisposalPaperWeightDetailEnum",
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
            "type": "WasteDisposalPaperWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WasteDisposalPaperWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WasteDisposalPaperWeightTypeEnum {
    WasteDisposal = 'waste_disposal'
}
export enum WasteDisposalPaperWeightSpecificationEnum {
    PaperAndBoardboard = 'paper_and_board:board',
    PaperAndBoardmixed = 'paper_and_board:mixed',
    PaperAndBoardpaper = 'paper_and_board:paper',
    Average = 'average'
}
export enum WasteDisposalPaperWeightDetailEnum {
    ClosedLoop = 'closed-loop',
    Combustion = 'combustion',
    Composting = 'composting',
    Landfill = 'landfill',
    Average = 'average'
}
export enum WasteDisposalPaperWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class WasteDisposalConstructionWeight {
    'type': WasteDisposalConstructionWeightTypeEnum;
    'activity'?: string;
    'specification'?: WasteDisposalConstructionWeightSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: WasteDisposalConstructionWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: WasteDisposalConstructionWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WasteDisposalConstructionWeightTypeEnum",
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
            "type": "WasteDisposalConstructionWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "WasteDisposalConstructionWeightDetailEnum",
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
            "type": "WasteDisposalConstructionWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WasteDisposalConstructionWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WasteDisposalConstructionWeightTypeEnum {
    WasteDisposal = 'waste_disposal'
}
export enum WasteDisposalConstructionWeightSpecificationEnum {
    Metals = 'metals',
    Aggregates = 'aggregates',
    Asbestos = 'asbestos',
    Asphalt = 'asphalt',
    Bricks = 'bricks',
    Concrete = 'concrete',
    Insulation = 'insulation',
    Soils = 'soils',
    MineralOil = 'mineral_oil',
    Plasterboard = 'plasterboard',
    Tyres = 'tyres',
    Wood = 'wood',
    Average = 'average'
}
export enum WasteDisposalConstructionWeightDetailEnum {
    Landfill = 'landfill',
    ClosedLoop = 'closed-loop',
    Average = 'average',
    OpenLoop = 'open-loop',
    Combustion = 'combustion',
    Composting = 'composting'
}
export enum WasteDisposalConstructionWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


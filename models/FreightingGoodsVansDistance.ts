/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsVansDistance {
    'type': FreightingGoodsVansDistanceTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsVansDistanceSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: FreightingGoodsVansDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FreightingGoodsVansDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsVansDistanceTypeEnum",
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
            "type": "FreightingGoodsVansDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsVansDistanceDetailEnum",
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
            "type": "FreightingGoodsVansDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsVansDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsVansDistanceTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsVansDistanceSpecificationEnum {
    ClassIUpTo1305Tons = 'class_i_up_to_1.305_tons',
    ClassIi1305To174Tons = 'class_ii_1.305_to_1.74_tons',
    ClassIii174To35Tons = 'class_iii_1.74_to_3.5_tons',
    AverageUpTo35Tons = 'average_up_to_3.5_tons',
    Average = 'average'
}
export enum FreightingGoodsVansDistanceDetailEnum {
    Diesel = 'diesel',
    Petrol = 'petrol',
    BatteryElectricVehicle = 'battery_electric_vehicle',
    Average = 'average',
    PlugInHybridElectricVehicle = 'plug-in_hybrid_electric_vehicle',
    Cng = 'cng',
    Lpg = 'lpg'
}
export enum FreightingGoodsVansDistanceUnitEnum {
    Kilometers = 'kilometers',
    Meters = 'meters',
    Centimeters = 'centimeters',
    Millimeters = 'millimeters',
    Inches = 'inches',
    Feet = 'feet',
    Yards = 'yards',
    Miles = 'miles',
    NauticalMiles = 'nautical miles'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsVansWeightAndDistance {
    'type': FreightingGoodsVansWeightAndDistanceTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsVansWeightAndDistanceSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: FreightingGoodsVansWeightAndDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a specific weight traveled in the given unit.    **Example:** 10 metric tons travel 50 kilometers. So the right `value` would be **500** and the `unit` would be **metric tons.kilometers**.    Need a more specific unit? See the **[full list of supported units (Sections 5 and 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FreightingGoodsVansWeightAndDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsVansWeightAndDistanceTypeEnum",
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
            "type": "FreightingGoodsVansWeightAndDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsVansWeightAndDistanceDetailEnum",
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
            "type": "FreightingGoodsVansWeightAndDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsVansWeightAndDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsVansWeightAndDistanceTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsVansWeightAndDistanceSpecificationEnum {
    ClassIUpTo1305Tons = 'class_i_up_to_1.305_tons',
    ClassIi1305To174Tons = 'class_ii_1.305_to_1.74_tons',
    ClassIii174To35Tons = 'class_iii_1.74_to_3.5_tons',
    AverageUpTo35Tons = 'average_up_to_3.5_tons',
    Average = 'average'
}
export enum FreightingGoodsVansWeightAndDistanceDetailEnum {
    Diesel = 'diesel',
    Petrol = 'petrol',
    BatteryElectricVehicle = 'battery_electric_vehicle',
    Average = 'average',
    PlugInHybridElectricVehicle = 'plug-in_hybrid_electric_vehicle',
    Cng = 'cng',
    Lpg = 'lpg'
}
export enum FreightingGoodsVansWeightAndDistanceUnitEnum {
    MetricTonsKilometers = 'metric tons.kilometers',
    MetricTonsMeters = 'metric tons.meters',
    MetricTonsMiles = 'metric tons.miles',
    KilogramsKilometers = 'kilograms.kilometers',
    KilogramsMeters = 'kilograms.meters',
    KilogramsMiles = 'kilograms.miles'
}


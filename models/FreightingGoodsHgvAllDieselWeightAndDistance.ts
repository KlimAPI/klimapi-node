/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsHgvAllDieselWeightAndDistance {
    'type': FreightingGoodsHgvAllDieselWeightAndDistanceTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsHgvAllDieselWeightAndDistanceSpecificationEnum;
    'detail'?: FreightingGoodsHgvAllDieselWeightAndDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a specific weight traveled in the given unit.    **Example:** 10 metric tons travel 50 kilometers. So the right `value` would be **500** and the `unit` would be **metric tons.kilometers**.    Need a more specific unit? See the **[full list of supported units (Sections 5 and 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FreightingGoodsHgvAllDieselWeightAndDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsHgvAllDieselWeightAndDistanceTypeEnum",
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
            "type": "FreightingGoodsHgvAllDieselWeightAndDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsHgvAllDieselWeightAndDistanceDetailEnum",
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
            "type": "FreightingGoodsHgvAllDieselWeightAndDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsHgvAllDieselWeightAndDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsHgvAllDieselWeightAndDistanceTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsHgvAllDieselWeightAndDistanceSpecificationEnum {
    Rigid3575Tons = 'rigid_>3.5-7.5_tons',
    Rigid75Tons17Tons = 'rigid_>7.5_tons-17_tons',
    Rigid17Tons = 'rigid_>17_tons',
    AllRigids = 'all_rigids',
    Articulated3533t = 'articulated_>3.5-33t',
    Articulated33t = 'articulated_>33t',
    AllArtics = 'all_artics',
    AllHgvs = 'all_hgvs',
    Average = 'average'
}
export enum FreightingGoodsHgvAllDieselWeightAndDistanceDetailEnum {
    _50Load = '50%_load',
    _100Load = '100%_load',
    Average = 'average'
}
export enum FreightingGoodsHgvAllDieselWeightAndDistanceUnitEnum {
    MetricTonsKilometers = 'metric tons.kilometers',
    MetricTonsMeters = 'metric tons.meters',
    MetricTonsMiles = 'metric tons.miles',
    KilogramsKilometers = 'kilograms.kilometers',
    KilogramsMeters = 'kilograms.meters',
    KilogramsMiles = 'kilograms.miles'
}


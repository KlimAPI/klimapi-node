/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsHgvAllDieselDistance {
    'type': FreightingGoodsHgvAllDieselDistanceTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsHgvAllDieselDistanceSpecificationEnum;
    'detail'?: FreightingGoodsHgvAllDieselDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FreightingGoodsHgvAllDieselDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsHgvAllDieselDistanceTypeEnum",
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
            "type": "FreightingGoodsHgvAllDieselDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsHgvAllDieselDistanceDetailEnum",
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
            "type": "FreightingGoodsHgvAllDieselDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsHgvAllDieselDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsHgvAllDieselDistanceTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsHgvAllDieselDistanceSpecificationEnum {
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
export enum FreightingGoodsHgvAllDieselDistanceDetailEnum {
    _50Load = '50%_load',
    _100Load = '100%_load',
    _0Load = '0%_load',
    Average = 'average'
}
export enum FreightingGoodsHgvAllDieselDistanceUnitEnum {
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


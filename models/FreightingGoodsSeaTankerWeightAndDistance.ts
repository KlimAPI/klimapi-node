/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsSeaTankerWeightAndDistance {
    'type': FreightingGoodsSeaTankerWeightAndDistanceTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsSeaTankerWeightAndDistanceSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: FreightingGoodsSeaTankerWeightAndDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a specific weight traveled in the given unit.    **Example:** 10 metric tons travel 50 kilometers. So the right `value` would be **500** and the `unit` would be **metric tons.kilometers**.    Need a more specific unit? See the **[full list of supported units (Sections 5 and 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FreightingGoodsSeaTankerWeightAndDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsSeaTankerWeightAndDistanceTypeEnum",
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
            "type": "FreightingGoodsSeaTankerWeightAndDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsSeaTankerWeightAndDistanceDetailEnum",
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
            "type": "FreightingGoodsSeaTankerWeightAndDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsSeaTankerWeightAndDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsSeaTankerWeightAndDistanceTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsSeaTankerWeightAndDistanceSpecificationEnum {
    CrudeTanker = 'crude_tanker',
    ProductsTanker = 'products_tanker',
    ChemicalTanker = 'chemical_tanker',
    LngTanker = 'lng_tanker',
    LpgTanker = 'lpg_tanker',
    Average = 'average'
}
export enum FreightingGoodsSeaTankerWeightAndDistanceDetailEnum {
    _200000Dwt = '200,000+_dwt',
    _120000199999Dwt = '120,000–199,999_dwt',
    _80000119999Dwt = '80,000–119,999_dwt',
    _6000079999Dwt = '60,000–79,999_dwt',
    _1000059999Dwt = '10,000–59,999_dwt',
    _09999Dwt = '0–9999_dwt',
    Average = 'average',
    _60000Dwt = '60,000+_dwt',
    _2000059999Dwt = '20,000–59,999_dwt',
    _1000019999Dwt = '10,000–19,999_dwt',
    _50009999Dwt = '5000–9999_dwt',
    _04999Dwt = '0–4999_dwt',
    _20000Dwt = '20,000+_dwt',
    _200000M3 = '200,000+_m3',
    _0199999M3 = '0–199,999_m3',
    _50000M3 = '50,000+_m3',
    _049999M3 = '0–49,999_m3'
}
export enum FreightingGoodsSeaTankerWeightAndDistanceUnitEnum {
    MetricTonsKilometers = 'metric tons.kilometers',
    MetricTonsMeters = 'metric tons.meters',
    MetricTonsMiles = 'metric tons.miles',
    KilogramsKilometers = 'kilograms.kilometers',
    KilogramsMeters = 'kilograms.meters',
    KilogramsMiles = 'kilograms.miles'
}


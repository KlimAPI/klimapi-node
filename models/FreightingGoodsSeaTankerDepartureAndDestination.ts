/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsSeaTankerDepartureAndDestination {
    'type': FreightingGoodsSeaTankerDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsSeaTankerDepartureAndDestinationSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: FreightingGoodsSeaTankerDepartureAndDestinationDetailEnum;
    /**
    * City, Postal Address, Train Station or IATA Code of the departure address
    */
    'departure': string;
    /**
    * City, Postal Address, Train Station or IATA Code of the destination address
    */
    'destination': string;
    /**
    * Decide if the trip is one way or return
    */
    'returnTrip'?: boolean;
    /**
    * The total weight travelling this route
    */
    'weight'?: number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'weightUnit'?: FreightingGoodsSeaTankerDepartureAndDestinationWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsSeaTankerDepartureAndDestinationTypeEnum",
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
            "type": "FreightingGoodsSeaTankerDepartureAndDestinationSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsSeaTankerDepartureAndDestinationDetailEnum",
            "format": ""
        },
        {
            "name": "departure",
            "baseName": "departure",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string",
            "format": ""
        },
        {
            "name": "returnTrip",
            "baseName": "return_trip",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "weightUnit",
            "baseName": "weight_unit",
            "type": "FreightingGoodsSeaTankerDepartureAndDestinationWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsSeaTankerDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsSeaTankerDepartureAndDestinationTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsSeaTankerDepartureAndDestinationSpecificationEnum {
    CrudeTanker = 'crude_tanker',
    ProductsTanker = 'products_tanker',
    ChemicalTanker = 'chemical_tanker',
    LngTanker = 'lng_tanker',
    LpgTanker = 'lpg_tanker',
    Average = 'average'
}
export enum FreightingGoodsSeaTankerDepartureAndDestinationDetailEnum {
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
export enum FreightingGoodsSeaTankerDepartureAndDestinationWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsFreightFlightsDepartureAndDestination {
    'type': FreightingGoodsFreightFlightsDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsFreightFlightsDepartureAndDestinationSpecificationEnum;
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
    'weightUnit'?: FreightingGoodsFreightFlightsDepartureAndDestinationWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsFreightFlightsDepartureAndDestinationTypeEnum",
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
            "type": "FreightingGoodsFreightFlightsDepartureAndDestinationSpecificationEnum",
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
            "type": "FreightingGoodsFreightFlightsDepartureAndDestinationWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsFreightFlightsDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsFreightFlightsDepartureAndDestinationTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsFreightFlightsDepartureAndDestinationSpecificationEnum {
    Domestic = 'domestic',
    ShortHaul = 'short-haul',
    LongHaul = 'long-haul',
    Average = 'average'
}
export enum FreightingGoodsFreightFlightsDepartureAndDestinationWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


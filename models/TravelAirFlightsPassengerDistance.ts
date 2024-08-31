/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelAirFlightsPassengerDistance {
    'type': TravelAirFlightsPassengerDistanceTypeEnum;
    'activity'?: string;
    'specification'?: TravelAirFlightsPassengerDistanceSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: TravelAirFlightsPassengerDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a passenger traveled in the given unit.    **Example:** 2 passengers travel 300 kilometers. So the right `value` would be **600** and the `unit` would be **passenger.kilometers**.    Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelAirFlightsPassengerDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelAirFlightsPassengerDistanceTypeEnum",
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
            "type": "TravelAirFlightsPassengerDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "TravelAirFlightsPassengerDistanceDetailEnum",
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
            "type": "TravelAirFlightsPassengerDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelAirFlightsPassengerDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelAirFlightsPassengerDistanceTypeEnum {
    TravelAir = 'travel-air'
}
export enum TravelAirFlightsPassengerDistanceSpecificationEnum {
    ShortHaul = 'short-haul',
    LongHaul = 'long-haul',
    Average = 'average'
}
export enum TravelAirFlightsPassengerDistanceDetailEnum {
    EconomyClass = 'economy_class',
    BusinessClass = 'business_class',
    Average = 'average',
    PremiumEconomyClass = 'premium_economy_class',
    FirstClass = 'first_class'
}
export enum TravelAirFlightsPassengerDistanceUnitEnum {
    Kilometers = 'passenger.kilometers',
    Meters = 'passenger.meters',
    Miles = 'passenger.miles'
}


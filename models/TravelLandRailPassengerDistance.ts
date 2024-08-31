/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandRailPassengerDistance {
    'type': TravelLandRailPassengerDistanceTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandRailPassengerDistanceSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a passenger traveled in the given unit.    **Example:** 2 passengers travel 300 kilometers. So the right `value` would be **600** and the `unit` would be **passenger.kilometers**.    Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandRailPassengerDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandRailPassengerDistanceTypeEnum",
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
            "type": "TravelLandRailPassengerDistanceSpecificationEnum",
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
            "type": "TravelLandRailPassengerDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandRailPassengerDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandRailPassengerDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandRailPassengerDistanceSpecificationEnum {
    NationalRail = 'national_rail',
    InternationalRail = 'international_rail',
    LightRailAndTram = 'light_rail_and_tram',
    Average = 'average'
}
export enum TravelLandRailPassengerDistanceUnitEnum {
    Kilometers = 'passenger.kilometers',
    Meters = 'passenger.meters',
    Miles = 'passenger.miles'
}


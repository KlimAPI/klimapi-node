/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandBusPassengerDistance {
    'type': TravelLandBusPassengerDistanceTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandBusPassengerDistanceSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a passenger traveled in the given unit.    **Example:** 2 passengers travel 300 kilometers. So the right `value` would be **600** and the `unit` would be **passenger.kilometers**.    Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandBusPassengerDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandBusPassengerDistanceTypeEnum",
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
            "type": "TravelLandBusPassengerDistanceSpecificationEnum",
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
            "type": "TravelLandBusPassengerDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandBusPassengerDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandBusPassengerDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandBusPassengerDistanceSpecificationEnum {
    LocalBus = 'local_bus',
    AverageLocalBus = 'average_local_bus',
    Coach = 'coach',
    Average = 'average'
}
export enum TravelLandBusPassengerDistanceUnitEnum {
    Kilometers = 'passenger.kilometers',
    Meters = 'passenger.meters',
    Miles = 'passenger.miles'
}


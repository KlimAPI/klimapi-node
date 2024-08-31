/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandFootBikePassengerDistance {
    'type': TravelLandFootBikePassengerDistanceTypeEnum;
    'activity'?: string;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a passenger traveled in the given unit.    **Example:** 2 passengers travel 300 kilometers. So the right `value` would be **600** and the `unit` would be **passenger.kilometers**.    Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandFootBikePassengerDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandFootBikePassengerDistanceTypeEnum",
            "format": ""
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "string",
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
            "type": "TravelLandFootBikePassengerDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandFootBikePassengerDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandFootBikePassengerDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandFootBikePassengerDistanceUnitEnum {
    Kilometers = 'passenger.kilometers',
    Meters = 'passenger.meters',
    Miles = 'passenger.miles'
}


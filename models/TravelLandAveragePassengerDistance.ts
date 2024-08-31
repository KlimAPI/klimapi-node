/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandAveragePassengerDistance {
    'type': TravelLandAveragePassengerDistanceTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a passenger traveled in the given unit.    **Example:** 2 passengers travel 300 kilometers. So the right `value` would be **600** and the `unit` would be **passenger.kilometers**.    Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandAveragePassengerDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandAveragePassengerDistanceTypeEnum",
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
            "type": "TravelLandAveragePassengerDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandAveragePassengerDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandAveragePassengerDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandAveragePassengerDistanceUnitEnum {
    Kilometers = 'passenger.kilometers',
    Meters = 'passenger.meters',
    Miles = 'passenger.miles'
}


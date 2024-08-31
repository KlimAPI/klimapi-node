/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelSeaAveragePassengerDistance {
    'type': TravelSeaAveragePassengerDistanceTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a passenger traveled in the given unit.    **Example:** 2 passengers travel 300 kilometers. So the right `value` would be **600** and the `unit` would be **passenger.kilometers**.    Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelSeaAveragePassengerDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelSeaAveragePassengerDistanceTypeEnum",
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
            "type": "TravelSeaAveragePassengerDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelSeaAveragePassengerDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelSeaAveragePassengerDistanceTypeEnum {
    TravelSea = 'travel-sea'
}
export enum TravelSeaAveragePassengerDistanceUnitEnum {
    Kilometers = 'passenger.kilometers',
    Meters = 'passenger.meters',
    Miles = 'passenger.miles'
}


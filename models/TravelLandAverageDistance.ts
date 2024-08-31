/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandAverageDistance {
    'type': TravelLandAverageDistanceTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandAverageDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandAverageDistanceTypeEnum",
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
            "type": "TravelLandAverageDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandAverageDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandAverageDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandAverageDistanceUnitEnum {
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


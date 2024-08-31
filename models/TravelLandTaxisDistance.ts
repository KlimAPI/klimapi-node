/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandTaxisDistance {
    'type': TravelLandTaxisDistanceTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandTaxisDistanceSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandTaxisDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandTaxisDistanceTypeEnum",
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
            "type": "TravelLandTaxisDistanceSpecificationEnum",
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
            "type": "TravelLandTaxisDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandTaxisDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandTaxisDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandTaxisDistanceSpecificationEnum {
    RegularTaxi = 'regular_taxi',
    BlackCab = 'black_cab',
    Average = 'average'
}
export enum TravelLandTaxisDistanceUnitEnum {
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


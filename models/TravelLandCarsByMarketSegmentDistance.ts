/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandCarsByMarketSegmentDistance {
    'type': TravelLandCarsByMarketSegmentDistanceTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandCarsByMarketSegmentDistanceSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: TravelLandCarsByMarketSegmentDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandCarsByMarketSegmentDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandCarsByMarketSegmentDistanceTypeEnum",
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
            "type": "TravelLandCarsByMarketSegmentDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "TravelLandCarsByMarketSegmentDistanceDetailEnum",
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
            "type": "TravelLandCarsByMarketSegmentDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandCarsByMarketSegmentDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandCarsByMarketSegmentDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandCarsByMarketSegmentDistanceSpecificationEnum {
    Mini = 'mini',
    Supermini = 'supermini',
    LowerMedium = 'lower_medium',
    UpperMedium = 'upper_medium',
    Executive = 'executive',
    Luxury = 'luxury',
    Sports = 'sports',
    DualPurpose4x4 = 'dual_purpose_4x4',
    Mpv = 'mpv',
    Average = 'average'
}
export enum TravelLandCarsByMarketSegmentDistanceDetailEnum {
    Diesel = 'diesel',
    Petrol = 'petrol',
    BatteryElectricVehicle = 'battery_electric_vehicle',
    Average = 'average',
    PlugInHybridElectricVehicle = 'plug-in_hybrid_electric_vehicle'
}
export enum TravelLandCarsByMarketSegmentDistanceUnitEnum {
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


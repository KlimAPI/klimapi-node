/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandCarsBySizeDistance {
    'type': TravelLandCarsBySizeDistanceTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandCarsBySizeDistanceSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: TravelLandCarsBySizeDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: TravelLandCarsBySizeDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandCarsBySizeDistanceTypeEnum",
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
            "type": "TravelLandCarsBySizeDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "TravelLandCarsBySizeDistanceDetailEnum",
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
            "type": "TravelLandCarsBySizeDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandCarsBySizeDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandCarsBySizeDistanceTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandCarsBySizeDistanceSpecificationEnum {
    SmallCar = 'small_car',
    MediumCar = 'medium_car',
    LargeCar = 'large_car',
    Average = 'average'
}
export enum TravelLandCarsBySizeDistanceDetailEnum {
    Diesel = 'diesel',
    Petrol = 'petrol',
    Hybrid = 'hybrid',
    PlugInHybridElectricVehicle = 'plug-in_hybrid_electric_vehicle',
    BatteryElectricVehicle = 'battery_electric_vehicle',
    Average = 'average',
    Cng = 'cng',
    Lpg = 'lpg'
}
export enum TravelLandCarsBySizeDistanceUnitEnum {
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


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandCarsBySizeDepartureAndDestination {
    'type': TravelLandCarsBySizeDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandCarsBySizeDepartureAndDestinationSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: TravelLandCarsBySizeDepartureAndDestinationDetailEnum;
    /**
    * City, Postal Address, Train Station or IATA Code of the departure address
    */
    'departure': string;
    /**
    * City, Postal Address, Train Station or IATA Code of the destination address
    */
    'destination': string;
    /**
    * Decide if the trip is one way or return
    */
    'returnTrip'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandCarsBySizeDepartureAndDestinationTypeEnum",
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
            "type": "TravelLandCarsBySizeDepartureAndDestinationSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "TravelLandCarsBySizeDepartureAndDestinationDetailEnum",
            "format": ""
        },
        {
            "name": "departure",
            "baseName": "departure",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string",
            "format": ""
        },
        {
            "name": "returnTrip",
            "baseName": "return_trip",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandCarsBySizeDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandCarsBySizeDepartureAndDestinationTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandCarsBySizeDepartureAndDestinationSpecificationEnum {
    SmallCar = 'small_car',
    MediumCar = 'medium_car',
    LargeCar = 'large_car',
    Average = 'average'
}
export enum TravelLandCarsBySizeDepartureAndDestinationDetailEnum {
    Diesel = 'diesel',
    Petrol = 'petrol',
    Hybrid = 'hybrid',
    PlugInHybridElectricVehicle = 'plug-in_hybrid_electric_vehicle',
    BatteryElectricVehicle = 'battery_electric_vehicle',
    Average = 'average',
    Cng = 'cng',
    Lpg = 'lpg'
}


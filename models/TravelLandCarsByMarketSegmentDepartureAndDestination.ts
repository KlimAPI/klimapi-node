/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandCarsByMarketSegmentDepartureAndDestination {
    'type': TravelLandCarsByMarketSegmentDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandCarsByMarketSegmentDepartureAndDestinationSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: TravelLandCarsByMarketSegmentDepartureAndDestinationDetailEnum;
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
            "type": "TravelLandCarsByMarketSegmentDepartureAndDestinationTypeEnum",
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
            "type": "TravelLandCarsByMarketSegmentDepartureAndDestinationSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "TravelLandCarsByMarketSegmentDepartureAndDestinationDetailEnum",
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
        return TravelLandCarsByMarketSegmentDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandCarsByMarketSegmentDepartureAndDestinationTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandCarsByMarketSegmentDepartureAndDestinationSpecificationEnum {
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
export enum TravelLandCarsByMarketSegmentDepartureAndDestinationDetailEnum {
    Diesel = 'diesel',
    Petrol = 'petrol',
    BatteryElectricVehicle = 'battery_electric_vehicle',
    Average = 'average',
    PlugInHybridElectricVehicle = 'plug-in_hybrid_electric_vehicle'
}


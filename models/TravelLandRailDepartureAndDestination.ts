/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandRailDepartureAndDestination {
    'type': TravelLandRailDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandRailDepartureAndDestinationSpecificationEnum;
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
    /**
    * The total of passengers travelling this route
    */
    'passengers'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelLandRailDepartureAndDestinationTypeEnum",
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
            "type": "TravelLandRailDepartureAndDestinationSpecificationEnum",
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
        },
        {
            "name": "passengers",
            "baseName": "passengers",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelLandRailDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandRailDepartureAndDestinationTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandRailDepartureAndDestinationSpecificationEnum {
    NationalRail = 'national_rail',
    InternationalRail = 'international_rail',
    LightRailAndTram = 'light_rail_and_tram',
    Average = 'average'
}


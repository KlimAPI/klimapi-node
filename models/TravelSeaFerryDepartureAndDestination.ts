/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelSeaFerryDepartureAndDestination {
    'type': TravelSeaFerryDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: TravelSeaFerryDepartureAndDestinationSpecificationEnum;
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
            "type": "TravelSeaFerryDepartureAndDestinationTypeEnum",
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
            "type": "TravelSeaFerryDepartureAndDestinationSpecificationEnum",
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
        return TravelSeaFerryDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelSeaFerryDepartureAndDestinationTypeEnum {
    TravelSea = 'travel-sea'
}
export enum TravelSeaFerryDepartureAndDestinationSpecificationEnum {
    FootPassenger = 'foot_passenger',
    CarPassenger = 'car_passenger',
    AverageAllPassenger = 'average_all_passenger',
    Average = 'average'
}


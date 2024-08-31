/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelLandBusDepartureAndDestination {
    'type': TravelLandBusDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: TravelLandBusDepartureAndDestinationSpecificationEnum;
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
            "type": "TravelLandBusDepartureAndDestinationTypeEnum",
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
            "type": "TravelLandBusDepartureAndDestinationSpecificationEnum",
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
        return TravelLandBusDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelLandBusDepartureAndDestinationTypeEnum {
    TravelLand = 'travel-land'
}
export enum TravelLandBusDepartureAndDestinationSpecificationEnum {
    LocalBus = 'local_bus',
    AverageLocalBus = 'average_local_bus',
    Coach = 'coach',
    Average = 'average'
}


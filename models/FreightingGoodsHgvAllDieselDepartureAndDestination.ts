/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsHgvAllDieselDepartureAndDestination {
    'type': FreightingGoodsHgvAllDieselDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsHgvAllDieselDepartureAndDestinationSpecificationEnum;
    'detail'?: FreightingGoodsHgvAllDieselDepartureAndDestinationDetailEnum;
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
            "type": "FreightingGoodsHgvAllDieselDepartureAndDestinationTypeEnum",
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
            "type": "FreightingGoodsHgvAllDieselDepartureAndDestinationSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsHgvAllDieselDepartureAndDestinationDetailEnum",
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
        return FreightingGoodsHgvAllDieselDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsHgvAllDieselDepartureAndDestinationTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsHgvAllDieselDepartureAndDestinationSpecificationEnum {
    Rigid3575Tons = 'rigid_>3.5-7.5_tons',
    Rigid75Tons17Tons = 'rigid_>7.5_tons-17_tons',
    Rigid17Tons = 'rigid_>17_tons',
    AllRigids = 'all_rigids',
    Articulated3533t = 'articulated_>3.5-33t',
    Articulated33t = 'articulated_>33t',
    AllArtics = 'all_artics',
    AllHgvs = 'all_hgvs',
    Average = 'average'
}
export enum FreightingGoodsHgvAllDieselDepartureAndDestinationDetailEnum {
    _50Load = '50%_load',
    _100Load = '100%_load',
    _0Load = '0%_load',
    Average = 'average'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsVansDepartureAndDestination {
    'type': FreightingGoodsVansDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsVansDepartureAndDestinationSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: FreightingGoodsVansDepartureAndDestinationDetailEnum;
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
            "type": "FreightingGoodsVansDepartureAndDestinationTypeEnum",
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
            "type": "FreightingGoodsVansDepartureAndDestinationSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsVansDepartureAndDestinationDetailEnum",
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
        return FreightingGoodsVansDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsVansDepartureAndDestinationTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsVansDepartureAndDestinationSpecificationEnum {
    ClassIUpTo1305Tons = 'class_i_up_to_1.305_tons',
    ClassIi1305To174Tons = 'class_ii_1.305_to_1.74_tons',
    ClassIii174To35Tons = 'class_iii_1.74_to_3.5_tons',
    AverageUpTo35Tons = 'average_up_to_3.5_tons',
    Average = 'average'
}
export enum FreightingGoodsVansDepartureAndDestinationDetailEnum {
    Diesel = 'diesel',
    Petrol = 'petrol',
    BatteryElectricVehicle = 'battery_electric_vehicle',
    Average = 'average',
    PlugInHybridElectricVehicle = 'plug-in_hybrid_electric_vehicle',
    Cng = 'cng',
    Lpg = 'lpg'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsCargoShipDepartureAndDestination {
    'type': FreightingGoodsCargoShipDepartureAndDestinationTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsCargoShipDepartureAndDestinationSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: FreightingGoodsCargoShipDepartureAndDestinationDetailEnum;
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
    * The total weight travelling this route
    */
    'weight'?: number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'weightUnit'?: FreightingGoodsCargoShipDepartureAndDestinationWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsCargoShipDepartureAndDestinationTypeEnum",
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
            "type": "FreightingGoodsCargoShipDepartureAndDestinationSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsCargoShipDepartureAndDestinationDetailEnum",
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
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "weightUnit",
            "baseName": "weight_unit",
            "type": "FreightingGoodsCargoShipDepartureAndDestinationWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsCargoShipDepartureAndDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsCargoShipDepartureAndDestinationTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsCargoShipDepartureAndDestinationSpecificationEnum {
    BulkCarrier = 'bulk_carrier',
    GeneralCargo = 'general_cargo',
    ContainerShip = 'container_ship',
    VehicleTransport = 'vehicle_transport',
    RoroFerry = 'roro-ferry',
    LargeRopaxFerry = 'large_ropax_ferry',
    RefrigeratedCargo = 'refrigerated_cargo',
    Average = 'average'
}
export enum FreightingGoodsCargoShipDepartureAndDestinationDetailEnum {
    _200000Dwt = '200,000+_dwt',
    _100000199999Dwt = '100,000–199,999_dwt',
    _6000099999Dwt = '60,000–99,999_dwt',
    _3500059999Dwt = '35,000–59,999_dwt',
    _1000034999Dwt = '10,000–34,999_dwt',
    _09999Dwt = '0–9999_dwt',
    Average = 'average',
    _10000Dwt = '10,000+_dwt',
    _50009999Dwt = '5000–9999_dwt',
    _04999Dwt = '0–4999_dwt',
    _10000Dwt100Teu = '10,000+_dwt_100+_teu',
    _50009999Dwt100Teu = '5000–9999_dwt_100+_teu',
    _04999Dwt100Teu = '0–4999_dwt_100+_teu',
    _8000Teu = '8000+_teu',
    _50007999Teu = '5000–7999_teu',
    _30004999Teu = '3000–4999_teu',
    _20002999Teu = '2000–2999_teu',
    _10001999Teu = '1000–1999_teu',
    _0999Teu = '0–999_teu',
    _4000Ceu = '4000+_ceu',
    _03999Ceu = '0–3999_ceu',
    _2000Lm = '2000+_lm',
    _01999Lm = '0–1999_lm',
    AllDwt = '_all_dwt'
}
export enum FreightingGoodsCargoShipDepartureAndDestinationWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


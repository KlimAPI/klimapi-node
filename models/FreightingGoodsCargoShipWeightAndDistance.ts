/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FreightingGoodsCargoShipWeightAndDistance {
    'type': FreightingGoodsCargoShipWeightAndDistanceTypeEnum;
    'activity'?: string;
    'specification'?: FreightingGoodsCargoShipWeightAndDistanceSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: FreightingGoodsCargoShipWeightAndDistanceDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Distance a specific weight traveled in the given unit.    **Example:** 10 metric tons travel 50 kilometers. So the right `value` would be **500** and the `unit` would be **metric tons.kilometers**.    Need a more specific unit? See the **[full list of supported units (Sections 5 and 6)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FreightingGoodsCargoShipWeightAndDistanceUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FreightingGoodsCargoShipWeightAndDistanceTypeEnum",
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
            "type": "FreightingGoodsCargoShipWeightAndDistanceSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "FreightingGoodsCargoShipWeightAndDistanceDetailEnum",
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
            "type": "FreightingGoodsCargoShipWeightAndDistanceUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FreightingGoodsCargoShipWeightAndDistance.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FreightingGoodsCargoShipWeightAndDistanceTypeEnum {
    FreightingGoods = 'freighting_goods'
}
export enum FreightingGoodsCargoShipWeightAndDistanceSpecificationEnum {
    BulkCarrier = 'bulk_carrier',
    GeneralCargo = 'general_cargo',
    ContainerShip = 'container_ship',
    VehicleTransport = 'vehicle_transport',
    RoroFerry = 'roro-ferry',
    LargeRopaxFerry = 'large_ropax_ferry',
    RefrigeratedCargo = 'refrigerated_cargo',
    Average = 'average'
}
export enum FreightingGoodsCargoShipWeightAndDistanceDetailEnum {
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
export enum FreightingGoodsCargoShipWeightAndDistanceUnitEnum {
    MetricTonsKilometers = 'metric tons.kilometers',
    MetricTonsMeters = 'metric tons.meters',
    MetricTonsMiles = 'metric tons.miles',
    KilogramsKilometers = 'kilograms.kilometers',
    KilogramsMeters = 'kilograms.meters',
    KilogramsMiles = 'kilograms.miles'
}


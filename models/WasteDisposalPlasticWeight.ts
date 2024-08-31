/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class WasteDisposalPlasticWeight {
    'type': WasteDisposalPlasticWeightTypeEnum;
    'activity'?: string;
    'specification'?: WasteDisposalPlasticWeightSpecificationEnum;
    'detail'?: WasteDisposalPlasticWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: WasteDisposalPlasticWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WasteDisposalPlasticWeightTypeEnum",
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
            "type": "WasteDisposalPlasticWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "WasteDisposalPlasticWeightDetailEnum",
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
            "type": "WasteDisposalPlasticWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WasteDisposalPlasticWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WasteDisposalPlasticWeightTypeEnum {
    WasteDisposal = 'waste_disposal'
}
export enum WasteDisposalPlasticWeightSpecificationEnum {
    PlasticsaveragePlastics = 'plastics:average_plastics',
    PlasticsaveragePlasticFilm = 'plastics:average_plastic_film',
    PlasticsaveragePlasticRigid = 'plastics:average_plastic_rigid',
    PlasticshdpeInclForming = 'plastics:hdpe_incl._forming',
    PlasticsldpeAndLldpeInclForming = 'plastics:ldpe_and_lldpe_incl._forming',
    PlasticspetInclForming = 'plastics:pet_incl._forming',
    PlasticsppInclForming = 'plastics:pp_incl._forming',
    PlasticspsInclForming = 'plastics:ps_incl._forming',
    PlasticspvcInclForming = 'plastics:pvc_incl._forming',
    Average = 'average'
}
export enum WasteDisposalPlasticWeightDetailEnum {
    OpenLoop = 'open-loop',
    ClosedLoop = 'closed-loop',
    Combustion = 'combustion',
    Landfill = 'landfill',
    Average = 'average'
}
export enum WasteDisposalPlasticWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


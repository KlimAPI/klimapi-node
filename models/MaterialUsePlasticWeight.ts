/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class MaterialUsePlasticWeight {
    'type': MaterialUsePlasticWeightTypeEnum;
    'activity'?: string;
    'specification'?: MaterialUsePlasticWeightSpecificationEnum;
    'detail'?: MaterialUsePlasticWeightDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: MaterialUsePlasticWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MaterialUsePlasticWeightTypeEnum",
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
            "type": "MaterialUsePlasticWeightSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "MaterialUsePlasticWeightDetailEnum",
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
            "type": "MaterialUsePlasticWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MaterialUsePlasticWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MaterialUsePlasticWeightTypeEnum {
    MaterialUse = 'material_use'
}
export enum MaterialUsePlasticWeightSpecificationEnum {
    PlasticspetInclForming = 'plastics:pet_incl._forming',
    PlasticsaveragePlastics = 'plastics:average_plastics',
    PlasticsaveragePlasticFilm = 'plastics:average_plastic_film',
    PlasticsaveragePlasticRigid = 'plastics:average_plastic_rigid',
    PlasticshdpeInclForming = 'plastics:hdpe_incl._forming',
    PlasticsldpeAndLldpeInclForming = 'plastics:ldpe_and_lldpe_incl._forming',
    PlasticsppInclForming = 'plastics:pp_incl._forming',
    PlasticspsInclForming = 'plastics:ps_incl._forming',
    PlasticspvcInclForming = 'plastics:pvc_incl._forming',
    Average = 'average'
}
export enum MaterialUsePlasticWeightDetailEnum {
    ClosedLoopSource = 'closed-loop_source',
    PrimaryMaterialProduction = 'primary_material_production',
    Average = 'average'
}
export enum MaterialUsePlasticWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


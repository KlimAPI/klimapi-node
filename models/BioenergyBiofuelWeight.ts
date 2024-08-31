/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BioenergyBiofuelWeight {
    'type': BioenergyBiofuelWeightTypeEnum;
    'activity'?: string;
    'specification'?: BioenergyBiofuelWeightSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: BioenergyBiofuelWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BioenergyBiofuelWeightTypeEnum",
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
            "type": "BioenergyBiofuelWeightSpecificationEnum",
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
            "type": "BioenergyBiofuelWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BioenergyBiofuelWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BioenergyBiofuelWeightTypeEnum {
    Bioenergy = 'bioenergy'
}
export enum BioenergyBiofuelWeightSpecificationEnum {
    Bioethanol = 'bioethanol',
    BiodieselMe = 'biodiesel_me',
    BiomethaneCompressed = 'biomethane_compressed',
    BiodieselMeFromUsedCookingOil = 'biodiesel_me_from_used_cooking_oil',
    BiodieselMeFromTallow = 'biodiesel_me_from_tallow',
    BiodieselHvo = 'biodiesel_hvo',
    Biopropane = 'biopropane',
    DevelopmentDiesel = 'development_diesel',
    DevelopmentPetrol = 'development_petrol',
    OffRoadBiodiesel = 'off_road_biodiesel',
    BiomethaneLiquified = 'biomethane_liquified',
    MethanolBio = 'methanol_bio',
    AvturRenewable = 'avtur_renewable',
    Average = 'average'
}
export enum BioenergyBiofuelWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


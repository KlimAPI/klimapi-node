/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BioenergyBiofuelVolume {
    'type': BioenergyBiofuelVolumeTypeEnum;
    'activity'?: string;
    'specification'?: BioenergyBiofuelVolumeSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 11)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: BioenergyBiofuelVolumeUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BioenergyBiofuelVolumeTypeEnum",
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
            "type": "BioenergyBiofuelVolumeSpecificationEnum",
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
            "type": "BioenergyBiofuelVolumeUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BioenergyBiofuelVolume.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BioenergyBiofuelVolumeTypeEnum {
    Bioenergy = 'bioenergy'
}
export enum BioenergyBiofuelVolumeSpecificationEnum {
    Bioethanol = 'bioethanol',
    BiodieselMe = 'biodiesel_me',
    BiodieselMeFromUsedCookingOil = 'biodiesel_me_from_used_cooking_oil',
    BiodieselMeFromTallow = 'biodiesel_me_from_tallow',
    BiodieselHvo = 'biodiesel_hvo',
    Biopropane = 'biopropane',
    DevelopmentDiesel = 'development_diesel',
    DevelopmentPetrol = 'development_petrol',
    OffRoadBiodiesel = 'off_road_biodiesel',
    MethanolBio = 'methanol_bio',
    AvturRenewable = 'avtur_renewable',
    Average = 'average'
}
export enum BioenergyBiofuelVolumeUnitEnum {
    Liters = 'liters',
    CubicMeters = 'cubic meters',
    CubicInches = 'cubic inches',
    Gallons = 'gallons'
}


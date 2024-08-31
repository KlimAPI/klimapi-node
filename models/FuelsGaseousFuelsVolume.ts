/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FuelsGaseousFuelsVolume {
    'type': FuelsGaseousFuelsVolumeTypeEnum;
    'activity'?: string;
    'specification'?: FuelsGaseousFuelsVolumeSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 11)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FuelsGaseousFuelsVolumeUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FuelsGaseousFuelsVolumeTypeEnum",
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
            "type": "FuelsGaseousFuelsVolumeSpecificationEnum",
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
            "type": "FuelsGaseousFuelsVolumeUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FuelsGaseousFuelsVolume.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FuelsGaseousFuelsVolumeTypeEnum {
    Fuels = 'fuels'
}
export enum FuelsGaseousFuelsVolumeSpecificationEnum {
    Butane = 'butane',
    Cng = 'cng',
    Lng = 'lng',
    Lpg = 'lpg',
    OtherPetroleumGas = 'other_petroleum_gas',
    Propane = 'propane',
    Average = 'average',
    NaturalGas = 'natural_gas',
    NaturalGas100MineralBlend = 'natural_gas_100%_mineral_blend',
    Average2 = 'average'
}
export enum FuelsGaseousFuelsVolumeUnitEnum {
    Liters = 'liters',
    CubicMeters = 'cubic meters',
    CubicInches = 'cubic inches',
    Gallons = 'gallons'
}


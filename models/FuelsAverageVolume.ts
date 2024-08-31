/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FuelsAverageVolume {
    'type': FuelsAverageVolumeTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 11)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FuelsAverageVolumeUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FuelsAverageVolumeTypeEnum",
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
            "type": "FuelsAverageVolumeUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FuelsAverageVolume.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FuelsAverageVolumeTypeEnum {
    Fuels = 'fuels'
}
export enum FuelsAverageVolumeUnitEnum {
    Liters = 'liters',
    CubicMeters = 'cubic meters',
    CubicInches = 'cubic inches',
    Gallons = 'gallons'
}


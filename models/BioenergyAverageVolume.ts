/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BioenergyAverageVolume {
    'type': BioenergyAverageVolumeTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 11)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: BioenergyAverageVolumeUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BioenergyAverageVolumeTypeEnum",
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
            "type": "BioenergyAverageVolumeUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BioenergyAverageVolume.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BioenergyAverageVolumeTypeEnum {
    Bioenergy = 'bioenergy'
}
export enum BioenergyAverageVolumeUnitEnum {
    Liters = 'liters',
    CubicMeters = 'cubic meters',
    CubicInches = 'cubic inches',
    Gallons = 'gallons'
}


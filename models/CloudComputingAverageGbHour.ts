/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class CloudComputingAverageGbHour {
    'type': CloudComputingAverageGbHourTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need another unit? Contact us!
    */
    'unit'?: CloudComputingAverageGbHourUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CloudComputingAverageGbHourTypeEnum",
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
            "type": "CloudComputingAverageGbHourUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudComputingAverageGbHour.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CloudComputingAverageGbHourTypeEnum {
    CloudComputing = 'cloud_computing'
}
export enum CloudComputingAverageGbHourUnitEnum {
    GbHour = 'gb-hour'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class CloudComputingAverageGb {
    'type': CloudComputingAverageGbTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need another unit? Contact us!
    */
    'unit'?: CloudComputingAverageGbUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CloudComputingAverageGbTypeEnum",
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
            "type": "CloudComputingAverageGbUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudComputingAverageGb.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CloudComputingAverageGbTypeEnum {
    CloudComputing = 'cloud_computing'
}
export enum CloudComputingAverageGbUnitEnum {
    Gb = 'gb'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class TravelSeaCruiseDays {
    'type': TravelSeaCruiseDaysTypeEnum;
    'activity'?: string;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need another unit? Contact us!
    */
    'unit'?: TravelSeaCruiseDaysUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TravelSeaCruiseDaysTypeEnum",
            "format": ""
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "string",
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
            "type": "TravelSeaCruiseDaysUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TravelSeaCruiseDays.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TravelSeaCruiseDaysTypeEnum {
    TravelSea = 'travel-sea'
}
export enum TravelSeaCruiseDaysUnitEnum {
    Days = 'days'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class IndividualFactor {
    'type': IndividualFactorTypeEnum;
    /**
    * Describe the individual factor
    */
    'activity': string;
    /**
    * Specify the individual factor
    */
    'specification': string;
    /**
    * Describe the unit used by the multiplier
    */
    'unit': string;
    /**
    * The amount of kg CO*2*e you want to add to the calculation.
    */
    'amount': number;
    /**
    * Multiplier for the given amount
    */
    'multiplier'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "IndividualFactorTypeEnum",
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
            "type": "string",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "multiplier",
            "baseName": "multiplier",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IndividualFactor.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum IndividualFactorTypeEnum {
    IndividualFactor = 'individual_factor'
}


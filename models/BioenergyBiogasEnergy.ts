/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BioenergyBiogasEnergy {
    'type': BioenergyBiogasEnergyTypeEnum;
    'activity'?: string;
    'specification'?: BioenergyBiogasEnergySpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 3)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: BioenergyBiogasEnergyUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BioenergyBiogasEnergyTypeEnum",
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
            "type": "BioenergyBiogasEnergySpecificationEnum",
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
            "type": "BioenergyBiogasEnergyUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BioenergyBiogasEnergy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BioenergyBiogasEnergyTypeEnum {
    Bioenergy = 'bioenergy'
}
export enum BioenergyBiogasEnergySpecificationEnum {
    LandfillGas = 'landfill_gas',
    Average = 'average'
}
export enum BioenergyBiogasEnergyUnitEnum {
    KWh = 'kWh',
    Wh = 'Wh',
    Mwh = 'MWh',
    Gwh = 'GWh',
    Twh = 'TWh',
    Joule = 'joule',
    Gigajoule = 'gigajoule',
    Megajoule = 'megajoule'
}


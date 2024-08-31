/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class BioenergyBiomassEnergy {
    'type': BioenergyBiomassEnergyTypeEnum;
    'activity'?: string;
    'specification'?: BioenergyBiomassEnergySpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 3)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: BioenergyBiomassEnergyUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BioenergyBiomassEnergyTypeEnum",
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
            "type": "BioenergyBiomassEnergySpecificationEnum",
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
            "type": "BioenergyBiomassEnergyUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BioenergyBiomassEnergy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BioenergyBiomassEnergyTypeEnum {
    Bioenergy = 'bioenergy'
}
export enum BioenergyBiomassEnergySpecificationEnum {
    WoodLogs = 'wood_logs',
    WoodChips = 'wood_chips',
    WoodPellets = 'wood_pellets',
    GrassStraw = 'grass/straw',
    Average = 'average'
}
export enum BioenergyBiomassEnergyUnitEnum {
    KWh = 'kWh',
    Wh = 'Wh',
    Mwh = 'MWh',
    Gwh = 'GWh',
    Twh = 'TWh',
    Joule = 'joule',
    Gigajoule = 'gigajoule',
    Megajoule = 'megajoule'
}


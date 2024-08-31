/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class HeatAndSteamEnergy {
    'type': HeatAndSteamEnergyTypeEnum;
    'activity'?: HeatAndSteamEnergyActivityEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 3)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: HeatAndSteamEnergyUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "HeatAndSteamEnergyTypeEnum",
            "format": ""
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "HeatAndSteamEnergyActivityEnum",
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
            "type": "HeatAndSteamEnergyUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HeatAndSteamEnergy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum HeatAndSteamEnergyTypeEnum {
    HeatAndSteam = 'heat_and_steam'
}
export enum HeatAndSteamEnergyActivityEnum {
    OnsiteHeatAndSteam = 'onsite_heat_and_steam',
    DistrictHeatAndSteam = 'district_heat_and_steam',
    Average = 'average'
}
export enum HeatAndSteamEnergyUnitEnum {
    KWh = 'kWh',
    Wh = 'Wh',
    Mwh = 'MWh',
    Gwh = 'GWh',
    Twh = 'TWh',
    Joule = 'joule',
    Gigajoule = 'gigajoule',
    Megajoule = 'megajoule'
}


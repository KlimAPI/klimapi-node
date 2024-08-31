/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class EnergyConsumptionByTypeEnergy {
    'type': EnergyConsumptionByTypeEnergyTypeEnum;
    'activity'?: string;
    'specification'?: EnergyConsumptionByTypeEnergySpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 3)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: EnergyConsumptionByTypeEnergyUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "EnergyConsumptionByTypeEnergyTypeEnum",
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
            "type": "EnergyConsumptionByTypeEnergySpecificationEnum",
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
            "type": "EnergyConsumptionByTypeEnergyUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnergyConsumptionByTypeEnergy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum EnergyConsumptionByTypeEnergyTypeEnum {
    EnergyConsumption = 'energy_consumption'
}
export enum EnergyConsumptionByTypeEnergySpecificationEnum {
    Coal = 'coal',
    NaturalGas = 'natural_gas',
    Biomass = 'biomass',
    GeothermalEnergy = 'geothermal_energy',
    Hydropower = 'hydropower',
    OffshoreWindPower = 'offshore_wind_power',
    OnshoreWindPower = 'onshore_wind_power',
    SolarPower = 'solar_power',
    SolarRoof = 'solar_roof',
    NuclearPower = 'nuclear_power',
    Average = 'average'
}
export enum EnergyConsumptionByTypeEnergyUnitEnum {
    KWh = 'kWh',
    Wh = 'Wh',
    Mwh = 'MWh',
    Gwh = 'GWh',
    Twh = 'TWh',
    Joule = 'joule',
    Gigajoule = 'gigajoule',
    Megajoule = 'megajoule'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FuelsLiquidFuelsVolume {
    'type': FuelsLiquidFuelsVolumeTypeEnum;
    'activity'?: string;
    'specification'?: FuelsLiquidFuelsVolumeSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 11)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FuelsLiquidFuelsVolumeUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FuelsLiquidFuelsVolumeTypeEnum",
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
            "type": "FuelsLiquidFuelsVolumeSpecificationEnum",
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
            "type": "FuelsLiquidFuelsVolumeUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FuelsLiquidFuelsVolume.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FuelsLiquidFuelsVolumeTypeEnum {
    Fuels = 'fuels'
}
export enum FuelsLiquidFuelsVolumeSpecificationEnum {
    AviationSpirit = 'aviation_spirit',
    AviationTurbineFuel = 'aviation_turbine_fuel',
    BurningOil = 'burning_oil',
    DieselAverageBiofuelBlend = 'diesel_average_biofuel_blend',
    Diesel100MineralDiesel = 'diesel_100%_mineral_diesel',
    FuelOil = 'fuel_oil',
    GasOil = 'gas_oil',
    Lubricants = 'lubricants',
    Naphtha = 'naphtha',
    PetrolAverageBiofuelBlend = 'petrol_average_biofuel_blend',
    Petrol100MineralPetrol = 'petrol_100%_mineral_petrol',
    ProcessedFuelOilsResidualOil = 'processed_fuel_oils-residual_oil',
    ProcessedFuelOilsDistillateOil = 'processed_fuel_oils-distillate_oil',
    WasteOils = 'waste_oils',
    MarineGasOil = 'marine_gas_oil',
    MarineFuelOil = 'marine_fuel_oil',
    Average = 'average'
}
export enum FuelsLiquidFuelsVolumeUnitEnum {
    Liters = 'liters',
    CubicMeters = 'cubic meters',
    CubicInches = 'cubic inches',
    Gallons = 'gallons'
}


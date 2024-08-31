/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FuelsLiquidFuelsWeight {
    'type': FuelsLiquidFuelsWeightTypeEnum;
    'activity'?: string;
    'specification'?: FuelsLiquidFuelsWeightSpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'unit'?: FuelsLiquidFuelsWeightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FuelsLiquidFuelsWeightTypeEnum",
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
            "type": "FuelsLiquidFuelsWeightSpecificationEnum",
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
            "type": "FuelsLiquidFuelsWeightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FuelsLiquidFuelsWeight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FuelsLiquidFuelsWeightTypeEnum {
    Fuels = 'fuels'
}
export enum FuelsLiquidFuelsWeightSpecificationEnum {
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
export enum FuelsLiquidFuelsWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { BioenergyAverageEnergy } from '../models/BioenergyAverageEnergy';
import { BioenergyAverageVolume } from '../models/BioenergyAverageVolume';
import { BioenergyAverageWeight } from '../models/BioenergyAverageWeight';
import { BioenergyBiofuelEnergy } from '../models/BioenergyBiofuelEnergy';
import { BioenergyBiofuelVolume } from '../models/BioenergyBiofuelVolume';
import { BioenergyBiofuelWeight } from '../models/BioenergyBiofuelWeight';
import { BioenergyBiogasEnergy } from '../models/BioenergyBiogasEnergy';
import { BioenergyBiogasWeight } from '../models/BioenergyBiogasWeight';
import { BioenergyBiomassEnergy } from '../models/BioenergyBiomassEnergy';
import { BioenergyBiomassWeight } from '../models/BioenergyBiomassWeight';
import { CloudComputingAverageCpuHour } from '../models/CloudComputingAverageCpuHour';
import { CloudComputingAverageGb } from '../models/CloudComputingAverageGb';
import { CloudComputingAverageGbHour } from '../models/CloudComputingAverageGbHour';
import { CloudComputingAverageTbHour } from '../models/CloudComputingAverageTbHour';
import { CloudComputingCpuCpuHour } from '../models/CloudComputingCpuCpuHour';
import { CloudComputingMemoryGbHour } from '../models/CloudComputingMemoryGbHour';
import { CloudComputingNetworkGb } from '../models/CloudComputingNetworkGb';
import { CloudComputingStorageTbHour } from '../models/CloudComputingStorageTbHour';
import { EnergyConsumptionAverageEnergy } from '../models/EnergyConsumptionAverageEnergy';
import { EnergyConsumptionByTypeEnergy } from '../models/EnergyConsumptionByTypeEnergy';
import { FoodAverageCurrency } from '../models/FoodAverageCurrency';
import { FoodBeveragesCurrency } from '../models/FoodBeveragesCurrency';
import { FoodDairyProductsCurrency } from '../models/FoodDairyProductsCurrency';
import { FoodFishProductsCurrency } from '../models/FoodFishProductsCurrency';
import { FoodFoodProductsNotElsewhereSpecifiedCurrency } from '../models/FoodFoodProductsNotElsewhereSpecifiedCurrency';
import { FoodMeatProductsBeefCurrency } from '../models/FoodMeatProductsBeefCurrency';
import { FoodMeatProductsNotElsewhereSpecifiedCurrency } from '../models/FoodMeatProductsNotElsewhereSpecifiedCurrency';
import { FoodMeatProductsPorkCurrency } from '../models/FoodMeatProductsPorkCurrency';
import { FoodMeatProductsPoultryCurrency } from '../models/FoodMeatProductsPoultryCurrency';
import { FoodProcessedRiceCurrency } from '../models/FoodProcessedRiceCurrency';
import { FoodSugarCurrency } from '../models/FoodSugarCurrency';
import { FoodTobaccoProductsCurrency } from '../models/FoodTobaccoProductsCurrency';
import { FoodVegetableOilsAndFatsCurrency } from '../models/FoodVegetableOilsAndFatsCurrency';
import { FreightingGoodsAverageDepartureAndDestination } from '../models/FreightingGoodsAverageDepartureAndDestination';
import { FreightingGoodsAverageDistance } from '../models/FreightingGoodsAverageDistance';
import { FreightingGoodsAverageWeightAndDistance } from '../models/FreightingGoodsAverageWeightAndDistance';
import { FreightingGoodsCargoShipDepartureAndDestination } from '../models/FreightingGoodsCargoShipDepartureAndDestination';
import { FreightingGoodsCargoShipWeightAndDistance } from '../models/FreightingGoodsCargoShipWeightAndDistance';
import { FreightingGoodsFreightFlightsDepartureAndDestination } from '../models/FreightingGoodsFreightFlightsDepartureAndDestination';
import { FreightingGoodsFreightFlightsWeightAndDistance } from '../models/FreightingGoodsFreightFlightsWeightAndDistance';
import { FreightingGoodsHgvAllDieselDepartureAndDestination } from '../models/FreightingGoodsHgvAllDieselDepartureAndDestination';
import { FreightingGoodsHgvAllDieselDistance } from '../models/FreightingGoodsHgvAllDieselDistance';
import { FreightingGoodsHgvAllDieselWeightAndDistance } from '../models/FreightingGoodsHgvAllDieselWeightAndDistance';
import { FreightingGoodsHgvRefrigeratedAllDieselDepartureAndDestination } from '../models/FreightingGoodsHgvRefrigeratedAllDieselDepartureAndDestination';
import { FreightingGoodsHgvRefrigeratedAllDieselDistance } from '../models/FreightingGoodsHgvRefrigeratedAllDieselDistance';
import { FreightingGoodsHgvRefrigeratedAllDieselWeightAndDistance } from '../models/FreightingGoodsHgvRefrigeratedAllDieselWeightAndDistance';
import { FreightingGoodsRailDepartureAndDestination } from '../models/FreightingGoodsRailDepartureAndDestination';
import { FreightingGoodsRailWeightAndDistance } from '../models/FreightingGoodsRailWeightAndDistance';
import { FreightingGoodsRoadDepartureAndDestination } from '../models/FreightingGoodsRoadDepartureAndDestination';
import { FreightingGoodsRoadWeightAndDistance } from '../models/FreightingGoodsRoadWeightAndDistance';
import { FreightingGoodsSeaTankerDepartureAndDestination } from '../models/FreightingGoodsSeaTankerDepartureAndDestination';
import { FreightingGoodsSeaTankerWeightAndDistance } from '../models/FreightingGoodsSeaTankerWeightAndDistance';
import { FreightingGoodsVansDepartureAndDestination } from '../models/FreightingGoodsVansDepartureAndDestination';
import { FreightingGoodsVansDistance } from '../models/FreightingGoodsVansDistance';
import { FreightingGoodsVansWeightAndDistance } from '../models/FreightingGoodsVansWeightAndDistance';
import { FuelsAverageVolume } from '../models/FuelsAverageVolume';
import { FuelsAverageWeight } from '../models/FuelsAverageWeight';
import { FuelsGaseousFuelsVolume } from '../models/FuelsGaseousFuelsVolume';
import { FuelsGaseousFuelsWeight } from '../models/FuelsGaseousFuelsWeight';
import { FuelsLiquidFuelsVolume } from '../models/FuelsLiquidFuelsVolume';
import { FuelsLiquidFuelsWeight } from '../models/FuelsLiquidFuelsWeight';
import { FuelsSolidFuelsWeight } from '../models/FuelsSolidFuelsWeight';
import { HeatAndSteamEnergy } from '../models/HeatAndSteamEnergy';
import { HomeworkingPerFteWorkingHour } from '../models/HomeworkingPerFteWorkingHour';
import { HotelStayRoomPerNight } from '../models/HotelStayRoomPerNight';
import { IndividualFactor } from '../models/IndividualFactor';
import { InfrastructureAverageCurrency } from '../models/InfrastructureAverageCurrency';
import { InfrastructureRealEstateCurrency } from '../models/InfrastructureRealEstateCurrency';
import { MaterialUseAverageCurrency } from '../models/MaterialUseAverageCurrency';
import { MaterialUseAverageWeight } from '../models/MaterialUseAverageWeight';
import { MaterialUseConstructionWeight } from '../models/MaterialUseConstructionWeight';
import { MaterialUseElectricalItemsWeight } from '../models/MaterialUseElectricalItemsWeight';
import { MaterialUseElectronicsCurrency } from '../models/MaterialUseElectronicsCurrency';
import { MaterialUseFurnitureCurrency } from '../models/MaterialUseFurnitureCurrency';
import { MaterialUseMetalWeight } from '../models/MaterialUseMetalWeight';
import { MaterialUseOrganicWeight } from '../models/MaterialUseOrganicWeight';
import { MaterialUseOtherWeight } from '../models/MaterialUseOtherWeight';
import { MaterialUsePaperProductsCurrency } from '../models/MaterialUsePaperProductsCurrency';
import { MaterialUsePaperWeight } from '../models/MaterialUsePaperWeight';
import { MaterialUsePlasticWeight } from '../models/MaterialUsePlasticWeight';
import { MaterialUseTextilesCurrency } from '../models/MaterialUseTextilesCurrency';
import { TravelAirAverageDepartureAndDestination } from '../models/TravelAirAverageDepartureAndDestination';
import { TravelAirAveragePassengerDistance } from '../models/TravelAirAveragePassengerDistance';
import { TravelAirFlightsDepartureAndDestination } from '../models/TravelAirFlightsDepartureAndDestination';
import { TravelAirFlightsPassengerDistance } from '../models/TravelAirFlightsPassengerDistance';
import { TravelLandAverageDepartureAndDestination } from '../models/TravelLandAverageDepartureAndDestination';
import { TravelLandAverageDistance } from '../models/TravelLandAverageDistance';
import { TravelLandAveragePassengerDistance } from '../models/TravelLandAveragePassengerDistance';
import { TravelLandBusDepartureAndDestination } from '../models/TravelLandBusDepartureAndDestination';
import { TravelLandBusPassengerDistance } from '../models/TravelLandBusPassengerDistance';
import { TravelLandCarsByMarketSegmentDepartureAndDestination } from '../models/TravelLandCarsByMarketSegmentDepartureAndDestination';
import { TravelLandCarsByMarketSegmentDistance } from '../models/TravelLandCarsByMarketSegmentDistance';
import { TravelLandCarsBySizeDepartureAndDestination } from '../models/TravelLandCarsBySizeDepartureAndDestination';
import { TravelLandCarsBySizeDistance } from '../models/TravelLandCarsBySizeDistance';
import { TravelLandFootBikeDepartureAndDestination } from '../models/TravelLandFootBikeDepartureAndDestination';
import { TravelLandFootBikePassengerDistance } from '../models/TravelLandFootBikePassengerDistance';
import { TravelLandMotorbikeDepartureAndDestination } from '../models/TravelLandMotorbikeDepartureAndDestination';
import { TravelLandMotorbikeDistance } from '../models/TravelLandMotorbikeDistance';
import { TravelLandRailDepartureAndDestination } from '../models/TravelLandRailDepartureAndDestination';
import { TravelLandRailPassengerDistance } from '../models/TravelLandRailPassengerDistance';
import { TravelLandTaxisDepartureAndDestination } from '../models/TravelLandTaxisDepartureAndDestination';
import { TravelLandTaxisDistance } from '../models/TravelLandTaxisDistance';
import { TravelLandTaxisPassengerDistance } from '../models/TravelLandTaxisPassengerDistance';
import { TravelSeaAverageDepartureAndDestination } from '../models/TravelSeaAverageDepartureAndDestination';
import { TravelSeaAveragePassengerDistance } from '../models/TravelSeaAveragePassengerDistance';
import { TravelSeaCruiseDays } from '../models/TravelSeaCruiseDays';
import { TravelSeaFerryDepartureAndDestination } from '../models/TravelSeaFerryDepartureAndDestination';
import { TravelSeaFerryPassengerDistance } from '../models/TravelSeaFerryPassengerDistance';
import { WasteDisposalAverageWeight } from '../models/WasteDisposalAverageWeight';
import { WasteDisposalConstructionWeight } from '../models/WasteDisposalConstructionWeight';
import { WasteDisposalElectricalItemsWeight } from '../models/WasteDisposalElectricalItemsWeight';
import { WasteDisposalMetalWeight } from '../models/WasteDisposalMetalWeight';
import { WasteDisposalOtherWeight } from '../models/WasteDisposalOtherWeight';
import { WasteDisposalPaperWeight } from '../models/WasteDisposalPaperWeight';
import { WasteDisposalPlasticWeight } from '../models/WasteDisposalPlasticWeight';
import { WasteDisposalRefuseWeight } from '../models/WasteDisposalRefuseWeight';
import { WaterSupplyVolume } from '../models/WaterSupplyVolume';
import { WaterTreatmentVolume } from '../models/WaterTreatmentVolume';
import { HttpFile } from '../http/http';

export class PendingByCalculationRequestCalculationOptionsInner {
    'type': PendingByCalculationRequestCalculationOptionsInnerTypeEnum;
    /**
    * Describe the individual factor
    */
    'activity': string;
    /**
    * Specify the individual factor
    */
    'specification': string;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Describe the unit used by the multiplier
    */
    'unit': string;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: PendingByCalculationRequestCalculationOptionsInnerDetailEnum;
    /**
    * City, Postal Address, Train Station or IATA Code of the departure address
    */
    'departure': string;
    /**
    * City, Postal Address, Train Station or IATA Code of the destination address
    */
    'destination': string;
    /**
    * Decide if the trip is one way or return
    */
    'returnTrip'?: boolean;
    /**
    * The total of passengers travelling this route
    */
    'passengers'?: number;
    /**
    * The total weight travelling this route
    */
    'weight'?: number;
    /**
    * Need a more specific unit? See the **[full list of supported units (Section 5)](https://convert.js.org/types/_unitsbymeasureraw)**.
    */
    'weightUnit'?: PendingByCalculationRequestCalculationOptionsInnerWeightUnitEnum;
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
            "type": "PendingByCalculationRequestCalculationOptionsInnerTypeEnum",
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
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "PendingByCalculationRequestCalculationOptionsInnerDetailEnum",
            "format": ""
        },
        {
            "name": "departure",
            "baseName": "departure",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string",
            "format": ""
        },
        {
            "name": "returnTrip",
            "baseName": "return_trip",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "passengers",
            "baseName": "passengers",
            "type": "number",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "weightUnit",
            "baseName": "weight_unit",
            "type": "PendingByCalculationRequestCalculationOptionsInnerWeightUnitEnum",
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
        return PendingByCalculationRequestCalculationOptionsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PendingByCalculationRequestCalculationOptionsInnerTypeEnum {
    Fuels = 'fuels',
    Bioenergy = 'bioenergy',
    HeatAndSteam = 'heat_and_steam',
    WaterSupply = 'water_supply',
    WaterTreatment = 'water_treatment',
    MaterialUse = 'material_use',
    WasteDisposal = 'waste_disposal',
    HotelStay = 'hotel_stay',
    TravelAir = 'travel-air',
    TravelSea = 'travel-sea',
    TravelLand = 'travel-land',
    FreightingGoods = 'freighting_goods',
    Homeworking = 'homeworking',
    Infrastructure = 'infrastructure',
    CloudComputing = 'cloud_computing',
    Food = 'food',
    EnergyConsumption = 'energy_consumption',
    IndividualFactor = 'individual_factor'
}
export enum PendingByCalculationRequestCalculationOptionsInnerDetailEnum {
    AfSouth1 = 'af-south-1',
    ApEast1 = 'ap-east-1',
    ApNortheast1 = 'ap-northeast-1',
    ApNortheast2 = 'ap-northeast-2',
    ApNortheast3 = 'ap-northeast-3',
    ApSouth1 = 'ap-south-1',
    ApSoutheast1 = 'ap-southeast-1',
    ApSoutheast2 = 'ap-southeast-2',
    CaCentral1 = 'ca-central-1',
    CnNorth1 = 'cn-north-1',
    CnNorthwest1 = 'cn-northwest-1',
    EuCentral1 = 'eu-central-1',
    EuNorth1 = 'eu-north-1',
    EuSouth1 = 'eu-south-1',
    EuWest1 = 'eu-west-1',
    EuWest2 = 'eu-west-2',
    EuWest3 = 'eu-west-3',
    MeSouth1 = 'me-south-1',
    SaEast1 = 'sa-east-1',
    UsEast1 = 'us-east-1',
    UsEast2 = 'us-east-2',
    UsGovEast1 = 'us-gov-east-1',
    UsGovWest1 = 'us-gov-west-1',
    UsWest1 = 'us-west-1',
    UsWest2 = 'us-west-2',
    Average = 'average',
    CentralIndia = 'central-india',
    CentralUs = 'central-us',
    EastAsia = 'east-asia',
    EastUs2 = 'east-us-2',
    EastUs3 = 'east-us-3',
    EastUs = 'east-us',
    NorthCentralUs = 'north-central-us',
    NorthEurope = 'north-europe',
    SouthCentralUs = 'south-central-us',
    SouthIndia = 'south-india',
    SoutheastAsia = 'southeast-asia',
    UkSouth = 'uk-south',
    UkWest = 'uk-west',
    WestCentralUs = 'west-central-us',
    WestEurope = 'west-europe',
    WestIndia = 'west-india',
    WestUs2 = 'west-us-2',
    WestUs3 = 'west-us-3',
    WestUs = 'west-us',
    AsiaEast1 = 'asia-east-1',
    AsiaEast2 = 'asia-east-2',
    AsiaNortheast1 = 'asia-northeast-1',
    AsiaNortheast2 = 'asia-northeast-2',
    AsiaNortheast3 = 'asia-northeast-3',
    AsiaSouth1 = 'asia-south-1',
    AsiaSoutheast1 = 'asia-southeast-1',
    AsiaSoutheast2 = 'asia-southeast-2',
    AustraliaSoutheast1 = 'australia-southeast-1',
    EuropeNorth1 = 'europe-north-1',
    EuropeWest1 = 'europe-west-1',
    EuropeWest2 = 'europe-west-2',
    EuropeWest3 = 'europe-west-3',
    EuropeWest4 = 'europe-west-4',
    EuropeWest6 = 'europe-west-6',
    NorthamericaNortheast1 = 'northamerica-northeast-1',
    SouthamericaEast1 = 'southamerica-east-1',
    UsCentral1 = 'us-central-1',
    UsEast4 = 'us-east-4',
    UsWest3 = 'us-west-3',
    UsWest4 = 'us-west-4'
}
export enum PendingByCalculationRequestCalculationOptionsInnerWeightUnitEnum {
    Kilograms = 'kilograms',
    Grams = 'grams',
    MetricTons = 'metric tons',
    ImperialTons = 'imperial tons',
    Pounds = 'pounds',
    Ounces = 'ounces'
}


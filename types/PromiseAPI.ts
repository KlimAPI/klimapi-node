import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddWebhookRequest } from '../models/AddWebhookRequest';
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
import { BuyAmount } from '../models/BuyAmount';
import { BuyPrice } from '../models/BuyPrice';
import { CalculateRequest } from '../models/CalculateRequest';
import { CalculationResult } from '../models/CalculationResult';
import { CalculationResults } from '../models/CalculationResults';
import { CartItem } from '../models/CartItem';
import { CartResult } from '../models/CartResult';
import { CartResultCalculationResultsInner } from '../models/CartResultCalculationResultsInner';
import { CartResultSettings } from '../models/CartResultSettings';
import { Category } from '../models/Category';
import { CertificationAuthority } from '../models/CertificationAuthority';
import { CheckoutLink } from '../models/CheckoutLink';
import { CheckoutLinkCalculated } from '../models/CheckoutLinkCalculated';
import { CheckoutLinks } from '../models/CheckoutLinks';
import { CheckoutLinksCalculated } from '../models/CheckoutLinksCalculated';
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
import { GetMetricsRequest } from '../models/GetMetricsRequest';
import { GetOrdersRequest } from '../models/GetOrdersRequest';
import { GetOrdersRequestFilters } from '../models/GetOrdersRequestFilters';
import { HeatAndSteamEnergy } from '../models/HeatAndSteamEnergy';
import { HomeworkingPerFteWorkingHour } from '../models/HomeworkingPerFteWorkingHour';
import { HotelStayRoomPerNight } from '../models/HotelStayRoomPerNight';
import { IndividualFactor } from '../models/IndividualFactor';
import { InfrastructureAverageCurrency } from '../models/InfrastructureAverageCurrency';
import { InfrastructureRealEstateCurrency } from '../models/InfrastructureRealEstateCurrency';
import { InvoiceDetails } from '../models/InvoiceDetails';
import { InvoiceDetailsAddress } from '../models/InvoiceDetailsAddress';
import { InvoiceDetailsTaxId } from '../models/InvoiceDetailsTaxId';
import { LinkByCalculationRequest } from '../models/LinkByCalculationRequest';
import { LinkByCarbonRequest } from '../models/LinkByCarbonRequest';
import { LinkByPriceRequest } from '../models/LinkByPriceRequest';
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
import { MetadataOrders } from '../models/MetadataOrders';
import { Order } from '../models/Order';
import { OrderByCalculationRequest } from '../models/OrderByCalculationRequest';
import { OrderCalculated } from '../models/OrderCalculated';
import { OrderMetrics } from '../models/OrderMetrics';
import { OrderRecipient } from '../models/OrderRecipient';
import { PendingByCalculationRequest } from '../models/PendingByCalculationRequest';
import { PendingByCalculationRequestCalculationOptionsInner } from '../models/PendingByCalculationRequestCalculationOptionsInner';
import { PendingByCarbonRequest } from '../models/PendingByCarbonRequest';
import { PendingByPriceRequest } from '../models/PendingByPriceRequest';
import { PendingOrder } from '../models/PendingOrder';
import { PendingOrderCalculated } from '../models/PendingOrderCalculated';
import { PendingOrders } from '../models/PendingOrders';
import { PendingOrdersCalculated } from '../models/PendingOrdersCalculated';
import { ProcessOrder } from '../models/ProcessOrder';
import { Product } from '../models/Product';
import { Project } from '../models/Project';
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
import { ObservableKlimApi } from './ObservableAPI';

import { KlimApiRequestFactory, KlimApiResponseProcessor} from "../apis/KlimApi";
export class PromiseKlimApi {
    private api: ObservableKlimApi

    public constructor(
        apiKey: string,
        configuration: Configuration,
        requestFactory?: KlimApiRequestFactory,
        responseProcessor?: KlimApiResponseProcessor
    ) {
        this.api = new ObservableKlimApi(apiKey, configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new Webhook to an integration. The webhook will be triggered by the given trigger.
     * Add Webhook
     * @param addWebhookRequest 
     */
    public addWebhookWithHttpInfo(addWebhookRequest: AddWebhookRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addWebhookWithHttpInfo(addWebhookRequest, _options);
        return result.toPromise();
    }

    /**
     * Add a new Webhook to an integration. The webhook will be triggered by the given trigger.
     * Add Webhook
     * @param addWebhookRequest 
     */
    public addWebhook(addWebhookRequest: AddWebhookRequest, _options?: Configuration): Promise<void> {
        const result = this.api.addWebhook(addWebhookRequest, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param calculateRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     */
    public calculateWithHttpInfo(calculateRequest: CalculateRequest, _options?: Configuration): Promise<HttpInfo<CalculationResults>> {
        const result = this.api.calculateWithHttpInfo(calculateRequest, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param calculateRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     */
    public calculate(calculateRequest: CalculateRequest, _options?: Configuration): Promise<CalculationResults> {
        const result = this.api.calculate(calculateRequest, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param cartItem 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public calculateCartWithHttpInfo(cartItem: Array<CartItem>, storeIdent: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<CartResult>> {
        const result = this.api.calculateCartWithHttpInfo(cartItem, storeIdent, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param cartItem 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public calculateCart(cartItem: Array<CartItem>, storeIdent: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<CartResult> {
        const result = this.api.calculateCart(cartItem, storeIdent, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Use the method to get all activated categories for the given API key.
     * Get all Categories
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getCategoriesWithHttpInfo(X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<Array<Category>>> {
        const result = this.api.getCategoriesWithHttpInfo(X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Use the method to get all activated categories for the given API key.
     * Get all Categories
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getCategories(X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<Array<Category>> {
        const result = this.api.getCategories(X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get all external certification authorities we are using for our compensation projects. Learn more about our [Portfolio](https://klimapi.com/portfolio).
     * Get all Certification Authorities
     */
    public getCertificationAuthoritiesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<CertificationAuthority>>> {
        const result = this.api.getCertificationAuthoritiesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get all external certification authorities we are using for our compensation projects. Learn more about our [Portfolio](https://klimapi.com/portfolio).
     * Get all Certification Authorities
     */
    public getCertificationAuthorities(_options?: Configuration): Promise<Array<CertificationAuthority>> {
        const result = this.api.getCertificationAuthorities(_options);
        return result.toPromise();
    }

    /**
     * Get metrics to all orders
     * Order Metrics
     * @param getMetricsRequest 
     */
    public getMetricsWithHttpInfo(getMetricsRequest: GetMetricsRequest, _options?: Configuration): Promise<HttpInfo<OrderMetrics>> {
        const result = this.api.getMetricsWithHttpInfo(getMetricsRequest, _options);
        return result.toPromise();
    }

    /**
     * Get metrics to all orders
     * Order Metrics
     * @param getMetricsRequest 
     */
    public getMetrics(getMetricsRequest: GetMetricsRequest, _options?: Configuration): Promise<OrderMetrics> {
        const result = this.api.getMetrics(getMetricsRequest, _options);
        return result.toPromise();
    }

    /**
     * Here you can request information about a specific Order.
     * Get Order
     * @param orderId You can get the order_id from several endpoints, for example when creating an Order.
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getOrderWithHttpInfo(orderId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.getOrderWithHttpInfo(orderId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Here you can request information about a specific Order.
     * Get Order
     * @param orderId You can get the order_id from several endpoints, for example when creating an Order.
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getOrder(orderId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<Order> {
        const result = this.api.getOrder(orderId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Query all orders
     * Get Orders
     * @param getOrdersRequest 
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getOrdersWithHttpInfo(getOrdersRequest: GetOrdersRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<MetadataOrders>> {
        const result = this.api.getOrdersWithHttpInfo(getOrdersRequest, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Query all orders
     * Get Orders
     * @param getOrdersRequest 
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getOrders(getOrdersRequest: GetOrdersRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<MetadataOrders> {
        const result = this.api.getOrders(getOrdersRequest, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Here you can request information about a specific Checkout Link.
     * Get Checkout Link
     * @param paymentLinkId The identifier of the checkout link that you want to be returned.
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getPaymentLinkWithHttpInfo(paymentLinkId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<CheckoutLink>> {
        const result = this.api.getPaymentLinkWithHttpInfo(paymentLinkId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Here you can request information about a specific Checkout Link.
     * Get Checkout Link
     * @param paymentLinkId The identifier of the checkout link that you want to be returned.
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getPaymentLink(paymentLinkId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<CheckoutLink> {
        const result = this.api.getPaymentLink(paymentLinkId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Here you can request information to every project in our database.
     * Get Project
     * @param projectId You can get the project_id from several endpoints, for example when creating an Order.
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getProjectWithHttpInfo(projectId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<Project>> {
        const result = this.api.getProjectWithHttpInfo(projectId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Here you can request information to every project in our database.
     * Get Project
     * @param projectId You can get the project_id from several endpoints, for example when creating an Order.
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getProject(projectId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<Project> {
        const result = this.api.getProject(projectId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Get all projects you supported with the given API key.
     * Get all supported Projects
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getProjectsWithHttpInfo(X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<Array<Project>>> {
        const result = this.api.getProjectsWithHttpInfo(X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Get all projects you supported with the given API key.
     * Get all supported Projects
     * @param X_LOCALE The locale in which the response should be returned
     */
    public getProjects(X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<Array<Project>> {
        const result = this.api.getProjects(X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By Calculation
     * @param linkByCalculationRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public linkByCalculationWithHttpInfo(linkByCalculationRequest: LinkByCalculationRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<CheckoutLinksCalculated>> {
        const result = this.api.linkByCalculationWithHttpInfo(linkByCalculationRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By Calculation
     * @param linkByCalculationRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public linkByCalculation(linkByCalculationRequest: LinkByCalculationRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<CheckoutLinksCalculated> {
        const result = this.api.linkByCalculation(linkByCalculationRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e.
     * By Carbon
     * @param linkByCarbonRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public linkByCarbonWithHttpInfo(linkByCarbonRequest?: LinkByCarbonRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<CheckoutLinks>> {
        const result = this.api.linkByCarbonWithHttpInfo(linkByCarbonRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e.
     * By Carbon
     * @param linkByCarbonRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public linkByCarbon(linkByCarbonRequest?: LinkByCarbonRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<CheckoutLinks> {
        const result = this.api.linkByCarbon(linkByCarbonRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by price.
     * By Price
     * @param linkByPriceRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public linkByPriceWithHttpInfo(linkByPriceRequest?: LinkByPriceRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<CheckoutLinks>> {
        const result = this.api.linkByPriceWithHttpInfo(linkByPriceRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by price.
     * By Price
     * @param linkByPriceRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public linkByPrice(linkByPriceRequest?: LinkByPriceRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<CheckoutLinks> {
        const result = this.api.linkByPrice(linkByPriceRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get Information about the Authenticated User, the Integration and the given API Key.
     * Get Authenticated User
     */
    public meWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.meWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get Information about the Authenticated User, the Integration and the given API Key.
     * Get Authenticated User
     */
    public me(_options?: Configuration): Promise<any> {
        const result = this.api.me(_options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By Calculation
     * @param orderByCalculationRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public orderByCalculationWithHttpInfo(orderByCalculationRequest: OrderByCalculationRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<OrderCalculated>> {
        const result = this.api.orderByCalculationWithHttpInfo(orderByCalculationRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By Calculation
     * @param orderByCalculationRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public orderByCalculation(orderByCalculationRequest: OrderByCalculationRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<OrderCalculated> {
        const result = this.api.orderByCalculation(orderByCalculationRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e. For this route the API key has no limits.
     * By Carbon
     * @param buyAmount 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public orderByCarbonWithHttpInfo(buyAmount?: BuyAmount, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.orderByCarbonWithHttpInfo(buyAmount, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e. For this route the API key has no limits.
     * By Carbon
     * @param buyAmount 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public orderByCarbon(buyAmount?: BuyAmount, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<Order> {
        const result = this.api.orderByCarbon(buyAmount, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by price. For this route the API key has no limits.
     * By Price
     * @param buyPrice 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public orderByPriceWithHttpInfo(buyPrice?: BuyPrice, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.orderByPriceWithHttpInfo(buyPrice, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Get the compensation instantly by price. For this route the API key has no limits.
     * By Price
     * @param buyPrice 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public orderByPrice(buyPrice?: BuyPrice, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<Order> {
        const result = this.api.orderByPrice(buyPrice, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By Calculation
     * @param pendingByCalculationRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public pendingByCalculationWithHttpInfo(pendingByCalculationRequest: PendingByCalculationRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<PendingOrdersCalculated>> {
        const result = this.api.pendingByCalculationWithHttpInfo(pendingByCalculationRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By Calculation
     * @param pendingByCalculationRequest Choose up to 100 Elements from the **[Calculation Options](https://klimapi.com/resources/factors)**. In this example it is just **Travel by Car**.
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public pendingByCalculation(pendingByCalculationRequest: PendingByCalculationRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<PendingOrdersCalculated> {
        const result = this.api.pendingByCalculation(pendingByCalculationRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Here you can create an Order by kilogram CO2e. Please note the request limits of your API key, normally it is 15000kg per request. We are happy to increase the limits on request, please write us a message.
     * By Carbon
     * @param pendingByCarbonRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public pendingByCarbonWithHttpInfo(pendingByCarbonRequest: PendingByCarbonRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<PendingOrders>> {
        const result = this.api.pendingByCarbonWithHttpInfo(pendingByCarbonRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Here you can create an Order by kilogram CO2e. Please note the request limits of your API key, normally it is 15000kg per request. We are happy to increase the limits on request, please write us a message.
     * By Carbon
     * @param pendingByCarbonRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public pendingByCarbon(pendingByCarbonRequest: PendingByCarbonRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<PendingOrders> {
        const result = this.api.pendingByCarbon(pendingByCarbonRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Here you can create an Order by price. Please note the request limits of your API key, normally it is 250€ per request. We are happy to increase the limits on request, please write us a message.
     * By Price
     * @param pendingByPriceRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public pendingByPriceWithHttpInfo(pendingByPriceRequest: PendingByPriceRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<HttpInfo<PendingOrders>> {
        const result = this.api.pendingByPriceWithHttpInfo(pendingByPriceRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * Here you can create an Order by price. Please note the request limits of your API key, normally it is 250€ per request. We are happy to increase the limits on request, please write us a message.
     * By Price
     * @param pendingByPriceRequest 
     * @param X_LOCALE The locale in which the response should be returned
     * @param X_CURRENCY The currency of the returned offset price
     */
    public pendingByPrice(pendingByPriceRequest: PendingByPriceRequest, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW', _options?: Configuration): Promise<PendingOrders> {
        const result = this.api.pendingByPrice(pendingByPriceRequest, X_LOCALE, X_CURRENCY, _options);
        return result.toPromise();
    }

    /**
     * You accepted the given order. You may now show a confirmation or provide the link to the certificate.
     * Process Pending Order
     * @param processOrder 
     * @param orderId The order id specified in the Order
     * @param X_LOCALE The locale in which the response should be returned
     */
    public processWithHttpInfo(processOrder: ProcessOrder, orderId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.processWithHttpInfo(processOrder, orderId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * You accepted the given order. You may now show a confirmation or provide the link to the certificate.
     * Process Pending Order
     * @param processOrder 
     * @param orderId The order id specified in the Order
     * @param X_LOCALE The locale in which the response should be returned
     */
    public process(processOrder: ProcessOrder, orderId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<Order> {
        const result = this.api.process(processOrder, orderId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Process a given cart to offset the cart\'s emissions
     * Process Cart
     * @param processOrder 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     * @param orderId The order id specified in the Order
     * @param X_LOCALE The locale in which the response should be returned
     */
    public processCartWithHttpInfo(processOrder: ProcessOrder, storeIdent: string, orderId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.processCartWithHttpInfo(processOrder, storeIdent, orderId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * Process a given cart to offset the cart\'s emissions
     * Process Cart
     * @param processOrder 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     * @param orderId The order id specified in the Order
     * @param X_LOCALE The locale in which the response should be returned
     */
    public processCart(processOrder: ProcessOrder, storeIdent: string, orderId: string, X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK', _options?: Configuration): Promise<Order> {
        const result = this.api.processCart(processOrder, storeIdent, orderId, X_LOCALE, _options);
        return result.toPromise();
    }

    /**
     * **Refunding an Order is only available for 30 days after the initial create/process call. Refunding is not available for Checkout Link Orders**
     * Refund Order
     * @param orderId The order id specified in the Order
     */
    public refundWithHttpInfo(orderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.refundWithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     * **Refunding an Order is only available for 30 days after the initial create/process call. Refunding is not available for Checkout Link Orders**
     * Refund Order
     * @param orderId The order id specified in the Order
     */
    public refund(orderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.refund(orderId, _options);
        return result.toPromise();
    }

    /**
     * Remove a Webhook from an integration.
     * Remove Webhook
     * @param addWebhookRequest 
     */
    public removeWebhookWithHttpInfo(addWebhookRequest: AddWebhookRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeWebhookWithHttpInfo(addWebhookRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove a Webhook from an integration.
     * Remove Webhook
     * @param addWebhookRequest 
     */
    public removeWebhook(addWebhookRequest: AddWebhookRequest, _options?: Configuration): Promise<void> {
        const result = this.api.removeWebhook(addWebhookRequest, _options);
        return result.toPromise();
    }

    /**
     * Use the method to sync multiple products from the given store to our database.
     * Sync multiple Products
     * @param product 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     */
    public syncBulkStoreWithHttpInfo(product: Array<Product>, storeIdent: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.syncBulkStoreWithHttpInfo(product, storeIdent, _options);
        return result.toPromise();
    }

    /**
     * Use the method to sync multiple products from the given store to our database.
     * Sync multiple Products
     * @param product 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     */
    public syncBulkStore(product: Array<Product>, storeIdent: string, _options?: Configuration): Promise<void> {
        const result = this.api.syncBulkStore(product, storeIdent, _options);
        return result.toPromise();
    }

    /**
     * Use the method to sync a single product from the given store to our database.
     * Sync a single Product
     * @param product 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     */
    public syncStoreWithHttpInfo(product: Product, storeIdent: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.syncStoreWithHttpInfo(product, storeIdent, _options);
        return result.toPromise();
    }

    /**
     * Use the method to sync a single product from the given store to our database.
     * Sync a single Product
     * @param product 
     * @param storeIdent Setup a new store **[here](https://klimapi.com/dashboard/ecommerce)** to get a store ident
     */
    public syncStore(product: Product, storeIdent: string, _options?: Configuration): Promise<void> {
        const result = this.api.syncStore(product, storeIdent, _options);
        return result.toPromise();
    }


}




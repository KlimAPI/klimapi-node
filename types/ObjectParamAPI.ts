import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddWebhookRequest } from '../models/AddWebhookRequest';
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
import { GetMetricsRequest } from '../models/GetMetricsRequest';
import { GetOrdersRequest } from '../models/GetOrdersRequest';
import { GetOrdersRequestFilters } from '../models/GetOrdersRequestFilters';
import { LinkByCalculationRequest } from '../models/LinkByCalculationRequest';
import { LinkByCarbonRequest } from '../models/LinkByCarbonRequest';
import { LinkByPriceRequest } from '../models/LinkByPriceRequest';
import { MetadataOrders } from '../models/MetadataOrders';
import { Order } from '../models/Order';
import { OrderByCalculationRequest } from '../models/OrderByCalculationRequest';
import { OrderCalculated } from '../models/OrderCalculated';
import { OrderMetrics } from '../models/OrderMetrics';
import { OrderRecipient } from '../models/OrderRecipient';
import { PendingByCalculationRequest } from '../models/PendingByCalculationRequest';
import { PendingByCarbonRequest } from '../models/PendingByCarbonRequest';
import { PendingByPriceRequest } from '../models/PendingByPriceRequest';
import { PendingOrder } from '../models/PendingOrder';
import { PendingOrderCalculated } from '../models/PendingOrderCalculated';
import { PendingOrders } from '../models/PendingOrders';
import { PendingOrdersCalculated } from '../models/PendingOrdersCalculated';
import { ProcessOrder } from '../models/ProcessOrder';
import { Product } from '../models/Product';
import { Project } from '../models/Project';

import { ObservableKlimApi } from "./ObservableAPI";
import { KlimApiRequestFactory, KlimApiResponseProcessor} from "../apis/KlimApi";

export interface KlimApiAddWebhookRequest {
    /**
     * 
     * @type AddWebhookRequest
     * @memberof KlimApiaddWebhook
     */
    addWebhookRequest: AddWebhookRequest
}

export interface KlimApiCalculateRequest {
    /**
     * Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
     * @type CalculateRequest
     * @memberof KlimApicalculate
     */
    calculateRequest: CalculateRequest
}

export interface KlimApiCalculateCartRequest {
    /**
     * 
     * @type Array&lt;CartItem&gt;
     * @memberof KlimApicalculateCart
     */
    cartItem: Array<CartItem>
    /**
     * Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
     * @type string
     * @memberof KlimApicalculateCart
     */
    storeIdent: string
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApicalculateCart
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApicalculateCart
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiGetCategoriesRequest {
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApigetCategories
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiGetCertificationAuthoritiesRequest {
}

export interface KlimApiGetMetricsRequest {
    /**
     * 
     * @type GetMetricsRequest
     * @memberof KlimApigetMetrics
     */
    getMetricsRequest: GetMetricsRequest
}

export interface KlimApiGetOrderRequest {
    /**
     * You can get the order_id from several endpoints, for example when creating an Order.
     * @type string
     * @memberof KlimApigetOrder
     */
    orderId: string
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApigetOrder
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiGetOrdersRequest {
    /**
     * 
     * @type GetOrdersRequest
     * @memberof KlimApigetOrders
     */
    getOrdersRequest: GetOrdersRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApigetOrders
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiGetPaymentLinkRequest {
    /**
     * 
     * @type string
     * @memberof KlimApigetPaymentLink
     */
    paymentLinkId: string
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApigetPaymentLink
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiGetProjectRequest {
    /**
     * You can get the project_id from several endpoints, for example when creating an Order.
     * @type string
     * @memberof KlimApigetProject
     */
    projectId: string
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApigetProject
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiGetProjectsRequest {
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApigetProjects
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiLinkByCalculationRequest {
    /**
     * Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
     * @type LinkByCalculationRequest
     * @memberof KlimApilinkByCalculation
     */
    linkByCalculationRequest: LinkByCalculationRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApilinkByCalculation
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApilinkByCalculation
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiLinkByCarbonRequest {
    /**
     * 
     * @type LinkByCarbonRequest
     * @memberof KlimApilinkByCarbon
     */
    linkByCarbonRequest?: LinkByCarbonRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApilinkByCarbon
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApilinkByCarbon
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiLinkByPriceRequest {
    /**
     * 
     * @type LinkByPriceRequest
     * @memberof KlimApilinkByPrice
     */
    linkByPriceRequest?: LinkByPriceRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApilinkByPrice
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApilinkByPrice
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiMeRequest {
}

export interface KlimApiOrderByCalculationRequest {
    /**
     * Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
     * @type OrderByCalculationRequest
     * @memberof KlimApiorderByCalculation
     */
    orderByCalculationRequest: OrderByCalculationRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApiorderByCalculation
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApiorderByCalculation
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiOrderByCarbonRequest {
    /**
     * 
     * @type BuyAmount
     * @memberof KlimApiorderByCarbon
     */
    buyAmount?: BuyAmount
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApiorderByCarbon
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApiorderByCarbon
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiOrderByPriceRequest {
    /**
     * 
     * @type BuyPrice
     * @memberof KlimApiorderByPrice
     */
    buyPrice?: BuyPrice
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApiorderByPrice
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApiorderByPrice
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiPendingByCalculationRequest {
    /**
     * Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
     * @type PendingByCalculationRequest
     * @memberof KlimApipendingByCalculation
     */
    pendingByCalculationRequest: PendingByCalculationRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApipendingByCalculation
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApipendingByCalculation
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiPendingByCarbonRequest {
    /**
     * 
     * @type PendingByCarbonRequest
     * @memberof KlimApipendingByCarbon
     */
    pendingByCarbonRequest: PendingByCarbonRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApipendingByCarbon
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApipendingByCarbon
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiPendingByPriceRequest {
    /**
     * 
     * @type PendingByPriceRequest
     * @memberof KlimApipendingByPrice
     */
    pendingByPriceRequest: PendingByPriceRequest
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApipendingByPrice
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
    /**
     * 
     * @type &#39;EUR&#39; | &#39;USD&#39; | &#39;GBP&#39; | &#39;CHF&#39; | &#39;CAD&#39; | &#39;NOK&#39; | &#39;SEK&#39; | &#39;DKK&#39; | &#39;INR&#39; | &#39;ALL&#39; | &#39;AMD&#39; | &#39;ANG&#39; | &#39;AOA&#39; | &#39;ARS&#39; | &#39;AUD&#39; | &#39;AWG&#39; | &#39;AZN&#39; | &#39;BAM&#39; | &#39;BBD&#39; | &#39;BDT&#39; | &#39;BGN&#39; | &#39;BMD&#39; | &#39;BND&#39; | &#39;BOB&#39; | &#39;BRL&#39; | &#39;BSD&#39; | &#39;BWP&#39; | &#39;BZD&#39; | &#39;COP&#39; | &#39;CRC&#39; | &#39;CVE&#39; | &#39;CZK&#39; | &#39;DOP&#39; | &#39;DZD&#39; | &#39;EGP&#39; | &#39;ETB&#39; | &#39;FJD&#39; | &#39;FKP&#39; | &#39;GEL&#39; | &#39;GIP&#39; | &#39;GMD&#39; | &#39;GTQ&#39; | &#39;GYD&#39; | &#39;HKD&#39; | &#39;HNL&#39; | &#39;HTG&#39; | &#39;HUF&#39; | &#39;IDR&#39; | &#39;ILS&#39; | &#39;ISK&#39; | &#39;JMD&#39; | &#39;KES&#39; | &#39;KGS&#39; | &#39;KHR&#39; | &#39;KYD&#39; | &#39;KZT&#39; | &#39;LAK&#39; | &#39;LBP&#39; | &#39;LKR&#39; | &#39;LRD&#39; | &#39;LSL&#39; | &#39;MAD&#39; | &#39;MDL&#39; | &#39;MKD&#39; | &#39;MMK&#39; | &#39;MNT&#39; | &#39;MOP&#39; | &#39;MUR&#39; | &#39;MVR&#39; | &#39;MWK&#39; | &#39;MXN&#39; | &#39;MYR&#39; | &#39;MZN&#39; | &#39;NAD&#39; | &#39;NGN&#39; | &#39;NIO&#39; | &#39;NPR&#39; | &#39;NZD&#39; | &#39;PAB&#39; | &#39;PEN&#39; | &#39;PGK&#39; | &#39;PHP&#39; | &#39;PKR&#39; | &#39;PLN&#39; | &#39;QAR&#39; | &#39;RON&#39; | &#39;RSD&#39; | &#39;SBD&#39; | &#39;SCR&#39; | &#39;SGD&#39; | &#39;SHP&#39; | &#39;SLE&#39; | &#39;SOS&#39; | &#39;SRD&#39; | &#39;STD&#39; | &#39;SZL&#39; | &#39;THB&#39; | &#39;TJS&#39; | &#39;TOP&#39; | &#39;TRY&#39; | &#39;TTD&#39; | &#39;TWD&#39; | &#39;TZS&#39; | &#39;UAH&#39; | &#39;UYU&#39; | &#39;UZS&#39; | &#39;WST&#39; | &#39;XCD&#39; | &#39;YER&#39; | &#39;ZAR&#39; | &#39;ZMW&#39;
     * @memberof KlimApipendingByPrice
     */
    X_CURRENCY?: 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW'
}

export interface KlimApiProcessRequest {
    /**
     * 
     * @type ProcessOrder
     * @memberof KlimApiprocess
     */
    processOrder: ProcessOrder
    /**
     * The order id specified in the Order
     * @type string
     * @memberof KlimApiprocess
     */
    orderId: string
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApiprocess
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiProcessCartRequest {
    /**
     * 
     * @type ProcessOrder
     * @memberof KlimApiprocessCart
     */
    processOrder: ProcessOrder
    /**
     * Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
     * @type string
     * @memberof KlimApiprocessCart
     */
    storeIdent: string
    /**
     * The order id specified in the Order
     * @type string
     * @memberof KlimApiprocessCart
     */
    orderId: string
    /**
     * 
     * @type &#39;DE&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;FR&#39; | &#39;IT&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;SV&#39; | &#39;SL&#39; | &#39;FI&#39; | &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;EL&#39; | &#39;ET&#39; | &#39;HU&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;RO&#39; | &#39;SK&#39;
     * @memberof KlimApiprocessCart
     */
    X_LOCALE?: 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK'
}

export interface KlimApiRefundRequest {
    /**
     * The order id specified in the Order
     * @type string
     * @memberof KlimApirefund
     */
    orderId: string
}

export interface KlimApiRemoveWebhookRequest {
    /**
     * 
     * @type AddWebhookRequest
     * @memberof KlimApiremoveWebhook
     */
    addWebhookRequest: AddWebhookRequest
}

export interface KlimApiSyncBulkStoreRequest {
    /**
     * 
     * @type Array&lt;Product&gt;
     * @memberof KlimApisyncBulkStore
     */
    product: Array<Product>
    /**
     * Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
     * @type string
     * @memberof KlimApisyncBulkStore
     */
    storeIdent: string
}

export interface KlimApiSyncStoreRequest {
    /**
     * 
     * @type Product
     * @memberof KlimApisyncStore
     */
    product: Product
    /**
     * Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
     * @type string
     * @memberof KlimApisyncStore
     */
    storeIdent: string
}

export class ObjectKlimApi {
    private api: ObservableKlimApi

    public constructor(configuration: Configuration, requestFactory?: KlimApiRequestFactory, responseProcessor?: KlimApiResponseProcessor) {
        this.api = new ObservableKlimApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new Webhook to an integration. The webhook will be triggered by the given trigger.
     * Add Webhook
     * @param param the request object
     */
    public addWebhookWithHttpInfo(param: KlimApiAddWebhookRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addWebhookWithHttpInfo(param.addWebhookRequest,  options).toPromise();
    }

    /**
     * Add a new Webhook to an integration. The webhook will be triggered by the given trigger.
     * Add Webhook
     * @param param the request object
     */
    public addWebhook(param: KlimApiAddWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.addWebhook(param.addWebhookRequest,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param param the request object
     */
    public calculateWithHttpInfo(param: KlimApiCalculateRequest, options?: Configuration): Promise<HttpInfo<CalculationResults>> {
        return this.api.calculateWithHttpInfo(param.calculateRequest,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param param the request object
     */
    public calculate(param: KlimApiCalculateRequest, options?: Configuration): Promise<CalculationResults> {
        return this.api.calculate(param.calculateRequest,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param param the request object
     */
    public calculateCartWithHttpInfo(param: KlimApiCalculateCartRequest, options?: Configuration): Promise<HttpInfo<CartResult>> {
        return this.api.calculateCartWithHttpInfo(param.cartItem, param.storeIdent, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * Calculate
     * @param param the request object
     */
    public calculateCart(param: KlimApiCalculateCartRequest, options?: Configuration): Promise<CartResult> {
        return this.api.calculateCart(param.cartItem, param.storeIdent, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Use the method to get all activated categories for the given API key.
     * Get all Categories
     * @param param the request object
     */
    public getCategoriesWithHttpInfo(param: KlimApiGetCategoriesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Category>>> {
        return this.api.getCategoriesWithHttpInfo(param.X_LOCALE,  options).toPromise();
    }

    /**
     * Use the method to get all activated categories for the given API key.
     * Get all Categories
     * @param param the request object
     */
    public getCategories(param: KlimApiGetCategoriesRequest = {}, options?: Configuration): Promise<Array<Category>> {
        return this.api.getCategories(param.X_LOCALE,  options).toPromise();
    }

    /**
     * Use this endpoint to get all external certification authorities we are using for our compensation projects. Learn more about our [Portfolio](/portfolio).
     * Get all Certification Authorities
     * @param param the request object
     */
    public getCertificationAuthoritiesWithHttpInfo(param: KlimApiGetCertificationAuthoritiesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<CertificationAuthority>>> {
        return this.api.getCertificationAuthoritiesWithHttpInfo( options).toPromise();
    }

    /**
     * Use this endpoint to get all external certification authorities we are using for our compensation projects. Learn more about our [Portfolio](/portfolio).
     * Get all Certification Authorities
     * @param param the request object
     */
    public getCertificationAuthorities(param: KlimApiGetCertificationAuthoritiesRequest = {}, options?: Configuration): Promise<Array<CertificationAuthority>> {
        return this.api.getCertificationAuthorities( options).toPromise();
    }

    /**
     * Get metrics to all orders
     * Order Metrics
     * @param param the request object
     */
    public getMetricsWithHttpInfo(param: KlimApiGetMetricsRequest, options?: Configuration): Promise<HttpInfo<OrderMetrics>> {
        return this.api.getMetricsWithHttpInfo(param.getMetricsRequest,  options).toPromise();
    }

    /**
     * Get metrics to all orders
     * Order Metrics
     * @param param the request object
     */
    public getMetrics(param: KlimApiGetMetricsRequest, options?: Configuration): Promise<OrderMetrics> {
        return this.api.getMetrics(param.getMetricsRequest,  options).toPromise();
    }

    /**
     * Here you can request information about a specific Order.
     * Get Order
     * @param param the request object
     */
    public getOrderWithHttpInfo(param: KlimApiGetOrderRequest, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.getOrderWithHttpInfo(param.orderId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Here you can request information about a specific Order.
     * Get Order
     * @param param the request object
     */
    public getOrder(param: KlimApiGetOrderRequest, options?: Configuration): Promise<Order> {
        return this.api.getOrder(param.orderId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Query all orders
     * Get Orders
     * @param param the request object
     */
    public getOrdersWithHttpInfo(param: KlimApiGetOrdersRequest, options?: Configuration): Promise<HttpInfo<MetadataOrders>> {
        return this.api.getOrdersWithHttpInfo(param.getOrdersRequest, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Query all orders
     * Get Orders
     * @param param the request object
     */
    public getOrders(param: KlimApiGetOrdersRequest, options?: Configuration): Promise<MetadataOrders> {
        return this.api.getOrders(param.getOrdersRequest, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Here you can request information about a specific Checkout Link.
     * Get Checkout Link
     * @param param the request object
     */
    public getPaymentLinkWithHttpInfo(param: KlimApiGetPaymentLinkRequest, options?: Configuration): Promise<HttpInfo<CheckoutLink>> {
        return this.api.getPaymentLinkWithHttpInfo(param.paymentLinkId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Here you can request information about a specific Checkout Link.
     * Get Checkout Link
     * @param param the request object
     */
    public getPaymentLink(param: KlimApiGetPaymentLinkRequest, options?: Configuration): Promise<CheckoutLink> {
        return this.api.getPaymentLink(param.paymentLinkId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Here you can request information to every project in our database.
     * Get Project
     * @param param the request object
     */
    public getProjectWithHttpInfo(param: KlimApiGetProjectRequest, options?: Configuration): Promise<HttpInfo<Project>> {
        return this.api.getProjectWithHttpInfo(param.projectId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Here you can request information to every project in our database.
     * Get Project
     * @param param the request object
     */
    public getProject(param: KlimApiGetProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.getProject(param.projectId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * Get all projects you supported with the given API key.
     * Get all supported Projects
     * @param param the request object
     */
    public getProjectsWithHttpInfo(param: KlimApiGetProjectsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Project>>> {
        return this.api.getProjectsWithHttpInfo(param.X_LOCALE,  options).toPromise();
    }

    /**
     * Get all projects you supported with the given API key.
     * Get all supported Projects
     * @param param the request object
     */
    public getProjects(param: KlimApiGetProjectsRequest = {}, options?: Configuration): Promise<Array<Project>> {
        return this.api.getProjects(param.X_LOCALE,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By calculation
     * @param param the request object
     */
    public linkByCalculationWithHttpInfo(param: KlimApiLinkByCalculationRequest, options?: Configuration): Promise<HttpInfo<CheckoutLinksCalculated>> {
        return this.api.linkByCalculationWithHttpInfo(param.linkByCalculationRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By calculation
     * @param param the request object
     */
    public linkByCalculation(param: KlimApiLinkByCalculationRequest, options?: Configuration): Promise<CheckoutLinksCalculated> {
        return this.api.linkByCalculation(param.linkByCalculationRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e.
     * By carbon
     * @param param the request object
     */
    public linkByCarbonWithHttpInfo(param: KlimApiLinkByCarbonRequest = {}, options?: Configuration): Promise<HttpInfo<CheckoutLinks>> {
        return this.api.linkByCarbonWithHttpInfo(param.linkByCarbonRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e.
     * By carbon
     * @param param the request object
     */
    public linkByCarbon(param: KlimApiLinkByCarbonRequest = {}, options?: Configuration): Promise<CheckoutLinks> {
        return this.api.linkByCarbon(param.linkByCarbonRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by price.
     * By price
     * @param param the request object
     */
    public linkByPriceWithHttpInfo(param: KlimApiLinkByPriceRequest = {}, options?: Configuration): Promise<HttpInfo<CheckoutLinks>> {
        return this.api.linkByPriceWithHttpInfo(param.linkByPriceRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by price.
     * By price
     * @param param the request object
     */
    public linkByPrice(param: KlimApiLinkByPriceRequest = {}, options?: Configuration): Promise<CheckoutLinks> {
        return this.api.linkByPrice(param.linkByPriceRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get Information about the Authenticated User, the Integration and the given API Key.
     * Get Authenticated User
     * @param param the request object
     */
    public meWithHttpInfo(param: KlimApiMeRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.meWithHttpInfo( options).toPromise();
    }

    /**
     * Get Information about the Authenticated User, the Integration and the given API Key.
     * Get Authenticated User
     * @param param the request object
     */
    public me(param: KlimApiMeRequest = {}, options?: Configuration): Promise<any> {
        return this.api.me( options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By calculation
     * @param param the request object
     */
    public orderByCalculationWithHttpInfo(param: KlimApiOrderByCalculationRequest, options?: Configuration): Promise<HttpInfo<OrderCalculated>> {
        return this.api.orderByCalculationWithHttpInfo(param.orderByCalculationRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By calculation
     * @param param the request object
     */
    public orderByCalculation(param: KlimApiOrderByCalculationRequest, options?: Configuration): Promise<OrderCalculated> {
        return this.api.orderByCalculation(param.orderByCalculationRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e. For this route the API key has no limits.
     * By carbon
     * @param param the request object
     */
    public orderByCarbonWithHttpInfo(param: KlimApiOrderByCarbonRequest = {}, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.orderByCarbonWithHttpInfo(param.buyAmount, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by kilogram CO2e. For this route the API key has no limits.
     * By carbon
     * @param param the request object
     */
    public orderByCarbon(param: KlimApiOrderByCarbonRequest = {}, options?: Configuration): Promise<Order> {
        return this.api.orderByCarbon(param.buyAmount, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by price. For this route the API key has no limits.
     * By price
     * @param param the request object
     */
    public orderByPriceWithHttpInfo(param: KlimApiOrderByPriceRequest = {}, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.orderByPriceWithHttpInfo(param.buyPrice, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Get the compensation instantly by price. For this route the API key has no limits.
     * By price
     * @param param the request object
     */
    public orderByPrice(param: KlimApiOrderByPriceRequest = {}, options?: Configuration): Promise<Order> {
        return this.api.orderByPrice(param.buyPrice, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By calculation
     * @param param the request object
     */
    public pendingByCalculationWithHttpInfo(param: KlimApiPendingByCalculationRequest, options?: Configuration): Promise<HttpInfo<PendingOrdersCalculated>> {
        return this.api.pendingByCalculationWithHttpInfo(param.pendingByCalculationRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * **IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.
     * By calculation
     * @param param the request object
     */
    public pendingByCalculation(param: KlimApiPendingByCalculationRequest, options?: Configuration): Promise<PendingOrdersCalculated> {
        return this.api.pendingByCalculation(param.pendingByCalculationRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Here you can create an Order by kilogram CO2e. Please note the request limits of your API key, normally it is 15000kg per request. We are happy to increase the limits on request, please write us a message.
     * By carbon
     * @param param the request object
     */
    public pendingByCarbonWithHttpInfo(param: KlimApiPendingByCarbonRequest, options?: Configuration): Promise<HttpInfo<PendingOrders>> {
        return this.api.pendingByCarbonWithHttpInfo(param.pendingByCarbonRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Here you can create an Order by kilogram CO2e. Please note the request limits of your API key, normally it is 15000kg per request. We are happy to increase the limits on request, please write us a message.
     * By carbon
     * @param param the request object
     */
    public pendingByCarbon(param: KlimApiPendingByCarbonRequest, options?: Configuration): Promise<PendingOrders> {
        return this.api.pendingByCarbon(param.pendingByCarbonRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Here you can create an Order by price. Please note the request limits of your API key, normally it is 250€ per request. We are happy to increase the limits on request, please write us a message.
     * By price
     * @param param the request object
     */
    public pendingByPriceWithHttpInfo(param: KlimApiPendingByPriceRequest, options?: Configuration): Promise<HttpInfo<PendingOrders>> {
        return this.api.pendingByPriceWithHttpInfo(param.pendingByPriceRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * Here you can create an Order by price. Please note the request limits of your API key, normally it is 250€ per request. We are happy to increase the limits on request, please write us a message.
     * By price
     * @param param the request object
     */
    public pendingByPrice(param: KlimApiPendingByPriceRequest, options?: Configuration): Promise<PendingOrders> {
        return this.api.pendingByPrice(param.pendingByPriceRequest, param.X_LOCALE, param.X_CURRENCY,  options).toPromise();
    }

    /**
     * You accepted the given order. You may now show a confirmation or provide the link to the certificate.
     * Process pending Order
     * @param param the request object
     */
    public processWithHttpInfo(param: KlimApiProcessRequest, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.processWithHttpInfo(param.processOrder, param.orderId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * You accepted the given order. You may now show a confirmation or provide the link to the certificate.
     * Process pending Order
     * @param param the request object
     */
    public process(param: KlimApiProcessRequest, options?: Configuration): Promise<Order> {
        return this.api.process(param.processOrder, param.orderId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * 
     * Process cart
     * @param param the request object
     */
    public processCartWithHttpInfo(param: KlimApiProcessCartRequest, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.processCartWithHttpInfo(param.processOrder, param.storeIdent, param.orderId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * 
     * Process cart
     * @param param the request object
     */
    public processCart(param: KlimApiProcessCartRequest, options?: Configuration): Promise<Order> {
        return this.api.processCart(param.processOrder, param.storeIdent, param.orderId, param.X_LOCALE,  options).toPromise();
    }

    /**
     * **Refunding an Order is only available for 30 days after the initial create/process call. Refunding is not available for Checkout Link Orders**
     * Refund Order
     * @param param the request object
     */
    public refundWithHttpInfo(param: KlimApiRefundRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.refundWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * **Refunding an Order is only available for 30 days after the initial create/process call. Refunding is not available for Checkout Link Orders**
     * Refund Order
     * @param param the request object
     */
    public refund(param: KlimApiRefundRequest, options?: Configuration): Promise<void> {
        return this.api.refund(param.orderId,  options).toPromise();
    }

    /**
     * Remove a Webhook from an integration.
     * Remove Webhook
     * @param param the request object
     */
    public removeWebhookWithHttpInfo(param: KlimApiRemoveWebhookRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeWebhookWithHttpInfo(param.addWebhookRequest,  options).toPromise();
    }

    /**
     * Remove a Webhook from an integration.
     * Remove Webhook
     * @param param the request object
     */
    public removeWebhook(param: KlimApiRemoveWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.removeWebhook(param.addWebhookRequest,  options).toPromise();
    }

    /**
     * Use the method to sync multiple products from the given store to our database.
     * Sync multiple Products
     * @param param the request object
     */
    public syncBulkStoreWithHttpInfo(param: KlimApiSyncBulkStoreRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.syncBulkStoreWithHttpInfo(param.product, param.storeIdent,  options).toPromise();
    }

    /**
     * Use the method to sync multiple products from the given store to our database.
     * Sync multiple Products
     * @param param the request object
     */
    public syncBulkStore(param: KlimApiSyncBulkStoreRequest, options?: Configuration): Promise<void> {
        return this.api.syncBulkStore(param.product, param.storeIdent,  options).toPromise();
    }

    /**
     * Use the method to sync a single product from the given store to our database.
     * Sync a single Product
     * @param param the request object
     */
    public syncStoreWithHttpInfo(param: KlimApiSyncStoreRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.syncStoreWithHttpInfo(param.product, param.storeIdent,  options).toPromise();
    }

    /**
     * Use the method to sync a single product from the given store to our database.
     * Sync a single Product
     * @param param the request object
     */
    public syncStore(param: KlimApiSyncStoreRequest, options?: Configuration): Promise<void> {
        return this.api.syncStore(param.product, param.storeIdent,  options).toPromise();
    }

}

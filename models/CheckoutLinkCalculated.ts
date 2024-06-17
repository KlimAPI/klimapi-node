/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { CalculationResult } from '../models/CalculationResult';
import { Project } from '../models/Project';
import { HttpFile } from '../http/http';

export class CheckoutLinkCalculated {
    /**
    * The checkout link you can transfer to the customer.
    */
    'paymentLink'?: string;
    /**
    * The checkout link id, used to make further calls to the API.
    */
    'paymentLinkId'?: string;
    /**
    * When payment_received is true, timestamp of when the certificate was issued in ISO 8601 format (UTC)
    */
    'certificateIssuedAt'?: Date;
    /**
    * When payment_received is true, the url to the certificate will be given.
    */
    'certificateUrl'?: string;
    /**
    * When payment_received is true, the url to the certificate pdf will be given.
    */
    'certificatePdf'?: string;
    /**
    * The id of the order created for the checkout link.
    */
    'orderId'?: string;
    /**
    * The amount of kg CO<sub>2</sub>e.
    */
    'kgCO2e'?: number;
    /**
    * The total of the compensation in your given currency **incl. VAT**.
    */
    'price'?: number;
    'currency'?: CheckoutLinkCalculatedCurrencyEnum;
    /**
    * This indicates if the order via the checkout link is already fulfilled or not.
    */
    'paymentReceived'?: string;
    'project'?: Project;
    /**
    * An array of the calculation results
    */
    'results'?: Array<CalculationResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paymentLink",
            "baseName": "payment_link",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentLinkId",
            "baseName": "payment_link_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificateIssuedAt",
            "baseName": "certificate_issued_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "certificateUrl",
            "baseName": "certificate_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificatePdf",
            "baseName": "certificate_pdf",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CheckoutLinkCalculatedCurrencyEnum",
            "format": ""
        },
        {
            "name": "paymentReceived",
            "baseName": "payment_received",
            "type": "string",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CalculationResult>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckoutLinkCalculated.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CheckoutLinkCalculatedCurrencyEnum {
    Eur = 'EUR',
    Usd = 'USD',
    Gbp = 'GBP',
    Chf = 'CHF',
    Cad = 'CAD',
    Nok = 'NOK',
    Sek = 'SEK',
    Dkk = 'DKK',
    Inr = 'INR',
    All = 'ALL',
    Amd = 'AMD',
    Ang = 'ANG',
    Aoa = 'AOA',
    Ars = 'ARS',
    Aud = 'AUD',
    Awg = 'AWG',
    Azn = 'AZN',
    Bam = 'BAM',
    Bbd = 'BBD',
    Bdt = 'BDT',
    Bgn = 'BGN',
    Bmd = 'BMD',
    Bnd = 'BND',
    Bob = 'BOB',
    Brl = 'BRL',
    Bsd = 'BSD',
    Bwp = 'BWP',
    Bzd = 'BZD',
    Cop = 'COP',
    Crc = 'CRC',
    Cve = 'CVE',
    Czk = 'CZK',
    Dop = 'DOP',
    Dzd = 'DZD',
    Egp = 'EGP',
    Etb = 'ETB',
    Fjd = 'FJD',
    Fkp = 'FKP',
    Gel = 'GEL',
    Gip = 'GIP',
    Gmd = 'GMD',
    Gtq = 'GTQ',
    Gyd = 'GYD',
    Hkd = 'HKD',
    Hnl = 'HNL',
    Htg = 'HTG',
    Huf = 'HUF',
    Idr = 'IDR',
    Ils = 'ILS',
    Isk = 'ISK',
    Jmd = 'JMD',
    Kes = 'KES',
    Kgs = 'KGS',
    Khr = 'KHR',
    Kyd = 'KYD',
    Kzt = 'KZT',
    Lak = 'LAK',
    Lbp = 'LBP',
    Lkr = 'LKR',
    Lrd = 'LRD',
    Lsl = 'LSL',
    Mad = 'MAD',
    Mdl = 'MDL',
    Mkd = 'MKD',
    Mmk = 'MMK',
    Mnt = 'MNT',
    Mop = 'MOP',
    Mur = 'MUR',
    Mvr = 'MVR',
    Mwk = 'MWK',
    Mxn = 'MXN',
    Myr = 'MYR',
    Mzn = 'MZN',
    Nad = 'NAD',
    Ngn = 'NGN',
    Nio = 'NIO',
    Npr = 'NPR',
    Nzd = 'NZD',
    Pab = 'PAB',
    Pen = 'PEN',
    Pgk = 'PGK',
    Php = 'PHP',
    Pkr = 'PKR',
    Pln = 'PLN',
    Qar = 'QAR',
    Ron = 'RON',
    Rsd = 'RSD',
    Sbd = 'SBD',
    Scr = 'SCR',
    Sgd = 'SGD',
    Shp = 'SHP',
    Sle = 'SLE',
    Sos = 'SOS',
    Srd = 'SRD',
    Std = 'STD',
    Szl = 'SZL',
    Thb = 'THB',
    Tjs = 'TJS',
    Top = 'TOP',
    Try = 'TRY',
    Ttd = 'TTD',
    Twd = 'TWD',
    Tzs = 'TZS',
    Uah = 'UAH',
    Uyu = 'UYU',
    Uzs = 'UZS',
    Wst = 'WST',
    Xcd = 'XCD',
    Yer = 'YER',
    Zar = 'ZAR',
    Zmw = 'ZMW'
}


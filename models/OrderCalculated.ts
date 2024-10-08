/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { CalculationResult } from '../models/CalculationResult';
import { OrderRecipient } from '../models/OrderRecipient';
import { Project } from '../models/Project';
import { HttpFile } from '../http/http';

export class OrderCalculated {
    'orderId'?: string;
    /**
    * The status of the order
    */
    'status'?: OrderCalculatedStatusEnum;
    /**
    * Timestamp of when the certificate was issued in ISO 8601 format (UTC)
    */
    'certificateIssuedAt'?: Date;
    'certificateUrl'?: string;
    'certificatePdf'?: string;
    /**
    * The total of the compensation in your given currency **excl. VAT**.
    */
    'price'?: number;
    'currency'?: OrderCalculatedCurrencyEnum;
    /**
    * The amount of kg CO<sub>2</sub>e.
    */
    'kgCO2e'?: number;
    /**
    * Add additional queryable information to the order as key-value pairs
    */
    'metadata'?: { [key: string]: string; };
    'project'?: Project;
    /**
    * An array of the calculation results
    */
    'results'?: Array<CalculationResult>;
    'recipient'?: OrderRecipient;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderCalculatedStatusEnum",
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
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "OrderCalculatedCurrencyEnum",
            "format": ""
        },
        {
            "name": "kgCO2e",
            "baseName": "kgCO2e",
            "type": "number",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
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
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "OrderRecipient",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderCalculated.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum OrderCalculatedStatusEnum {
    Offer = 'offer',
    PaymentPending = 'payment_pending',
    OffsetPending = 'offset_pending',
    Processed = 'processed',
    Refunded = 'refunded'
}
export enum OrderCalculatedCurrencyEnum {
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


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class InfrastructureAverageCurrency {
    'type': InfrastructureAverageCurrencyTypeEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    'unit'?: InfrastructureAverageCurrencyUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InfrastructureAverageCurrencyTypeEnum",
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
            "type": "InfrastructureAverageCurrencyUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InfrastructureAverageCurrency.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InfrastructureAverageCurrencyTypeEnum {
    Infrastructure = 'infrastructure'
}
export enum InfrastructureAverageCurrencyUnitEnum {
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


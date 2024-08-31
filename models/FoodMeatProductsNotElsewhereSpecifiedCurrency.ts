/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class FoodMeatProductsNotElsewhereSpecifiedCurrency {
    'type': FoodMeatProductsNotElsewhereSpecifiedCurrencyTypeEnum;
    'activity'?: string;
    'specification'?: FoodMeatProductsNotElsewhereSpecifiedCurrencySpecificationEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    'unit'?: FoodMeatProductsNotElsewhereSpecifiedCurrencyUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FoodMeatProductsNotElsewhereSpecifiedCurrencyTypeEnum",
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
            "type": "FoodMeatProductsNotElsewhereSpecifiedCurrencySpecificationEnum",
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
            "type": "FoodMeatProductsNotElsewhereSpecifiedCurrencyUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FoodMeatProductsNotElsewhereSpecifiedCurrency.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FoodMeatProductsNotElsewhereSpecifiedCurrencyTypeEnum {
    Food = 'food'
}
export enum FoodMeatProductsNotElsewhereSpecifiedCurrencySpecificationEnum {
    At = 'at',
    Au = 'au',
    Be = 'be',
    Bg = 'bg',
    Br = 'br',
    Ca = 'ca',
    Ch = 'ch',
    Cn = 'cn',
    Cy = 'cy',
    Cz = 'cz',
    De = 'de',
    Dk = 'dk',
    Ee = 'ee',
    Es = 'es',
    Fi = 'fi',
    Fr = 'fr',
    Gb = 'gb',
    Gr = 'gr',
    Hr = 'hr',
    Hu = 'hu',
    Id = 'id',
    Ie = 'ie',
    In = 'in',
    It = 'it',
    Jp = 'jp',
    Kr = 'kr',
    Lt = 'lt',
    Lu = 'lu',
    Lv = 'lv',
    Mt = 'mt',
    Mx = 'mx',
    Nl = 'nl',
    No = 'no',
    Pl = 'pl',
    Pt = 'pt',
    Ro = 'ro',
    Ru = 'ru',
    Se = 'se',
    Si = 'si',
    Sk = 'sk',
    Tr = 'tr',
    Tw = 'tw',
    Us = 'us',
    Za = 'za',
    Average = 'average'
}
export enum FoodMeatProductsNotElsewhereSpecifiedCurrencyUnitEnum {
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


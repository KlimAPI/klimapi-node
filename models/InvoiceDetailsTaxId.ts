/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

/**
* The customer’s tax ID.
*/
export class InvoiceDetailsTaxId {
    /**
    * Type of the tax ID
    */
    'type': InvoiceDetailsTaxIdTypeEnum;
    /**
    * Value of the tax ID
    */
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InvoiceDetailsTaxIdTypeEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceDetailsTaxId.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InvoiceDetailsTaxIdTypeEnum {
    EuVat = 'eu_vat',
    GbVat = 'gb_vat',
    UsEin = 'us_ein',
    AdNrt = 'ad_nrt',
    AeTrn = 'ae_trn',
    ArCuit = 'ar_cuit',
    AuAbn = 'au_abn',
    AuArn = 'au_arn',
    BgUic = 'bg_uic',
    BhVat = 'bh_vat',
    BoTin = 'bo_tin',
    BrCnpj = 'br_cnpj',
    BrCpf = 'br_cpf',
    CaBn = 'ca_bn',
    CaGstHst = 'ca_gst_hst',
    CaPstBc = 'ca_pst_bc',
    CaPstMb = 'ca_pst_mb',
    CaPstSk = 'ca_pst_sk',
    CaQst = 'ca_qst',
    ChUid = 'ch_uid',
    ChVat = 'ch_vat',
    ClTin = 'cl_tin',
    CoNit = 'co_nit',
    CrTin = 'cr_tin',
    DeStn = 'de_stn',
    DoRcn = 'do_rcn',
    EcRuc = 'ec_ruc',
    EgTin = 'eg_tin',
    EsCif = 'es_cif',
    EuOssVat = 'eu_oss_vat',
    GeVat = 'ge_vat',
    HuTin = 'hu_tin',
    IdNpwp = 'id_npwp',
    IlVat = 'il_vat',
    InGst = 'in_gst',
    IsVat = 'is_vat',
    JpCn = 'jp_cn',
    JpRn = 'jp_rn',
    JpTrn = 'jp_trn',
    KePin = 'ke_pin',
    KrBrn = 'kr_brn',
    KzBin = 'kz_bin',
    LiUid = 'li_uid',
    MxRfc = 'mx_rfc',
    MyFrp = 'my_frp',
    MyItn = 'my_itn',
    MySst = 'my_sst',
    NgTin = 'ng_tin',
    NoVat = 'no_vat',
    NoVoec = 'no_voec',
    NzGst = 'nz_gst',
    OmVat = 'om_vat',
    PeRuc = 'pe_ruc',
    PhTin = 'ph_tin',
    RoTin = 'ro_tin',
    RsPib = 'rs_pib',
    RuKpp = 'ru_kpp',
    SaVat = 'sa_vat',
    SgGst = 'sg_gst',
    SgUen = 'sg_uen',
    SiTin = 'si_tin',
    SvNit = 'sv_nit',
    ThVat = 'th_vat',
    TrTin = 'tr_tin',
    TwVat = 'tw_vat',
    UaVat = 'ua_vat',
    UyRuc = 'uy_ruc',
    VeRif = 've_rif',
    VnTin = 'vn_tin',
    ZaVat = 'za_vat'
}


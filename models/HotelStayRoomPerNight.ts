/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class HotelStayRoomPerNight {
    'type': HotelStayRoomPerNightTypeEnum;
    'activity'?: HotelStayRoomPerNightActivityEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need another unit? Contact us!
    */
    'unit'?: HotelStayRoomPerNightUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "HotelStayRoomPerNightTypeEnum",
            "format": ""
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "HotelStayRoomPerNightActivityEnum",
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
            "type": "HotelStayRoomPerNightUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HotelStayRoomPerNight.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum HotelStayRoomPerNightTypeEnum {
    HotelStay = 'hotel_stay'
}
export enum HotelStayRoomPerNightActivityEnum {
    Fr = 'fr',
    De = 'de',
    In = 'in',
    Id = 'id',
    Cr = 'cr',
    Eg = 'eg',
    Uk = 'uk',
    Au = 'au',
    Be = 'be',
    Br = 'br',
    Ca = 'ca',
    Cl = 'cl',
    Cn = 'cn',
    Co = 'co',
    It = 'it',
    Jp = 'jp',
    Jo = 'jo',
    Kp = 'kp',
    My = 'my',
    Mv = 'mv',
    Mx = 'mx',
    Nl = 'nl',
    Om = 'om',
    Ph = 'ph',
    Pt = 'pt',
    Qa = 'qa',
    Ru = 'ru',
    Sa = 'sa',
    Sg = 'sg',
    Za = 'za',
    Es = 'es',
    Ch = 'ch',
    Th = 'th',
    Tr = 'tr',
    Ae = 'ae',
    Us = 'us',
    Average = 'average'
}
export enum HotelStayRoomPerNightUnitEnum {
    RoomPerNight = 'room_per_night'
}


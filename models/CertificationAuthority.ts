/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class CertificationAuthority {
    /**
    * The id of the Certification Authority
    */
    'id'?: number;
    /**
    * Name of the Certification Authority
    */
    'name'?: string;
    /**
    * The Website of the Certification Authority
    */
    'website'?: string;
    /**
    * The Logo of the Certification Authority
    */
    'logoImage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoImage",
            "baseName": "logo_image",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CertificationAuthority.attributeTypeMap;
    }

    public constructor() {
    }
}


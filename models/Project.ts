/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class Project {
    'id'?: string;
    'title'?: string;
    'summary'?: string;
    'status'?: string;
    'categoryId'?: number;
    'certificationAuthorityId'?: number;
    'country'?: string;
    'description'?: string;
    'goals'?: string;
    'images'?: Array<string>;
    'benefits'?: Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "certificationAuthorityId",
            "baseName": "certification_authority_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "goals",
            "baseName": "goals",
            "type": "string",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "benefits",
            "baseName": "benefits",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Project.attributeTypeMap;
    }

    public constructor() {
    }
}


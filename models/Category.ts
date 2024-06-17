/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class Category {
    /**
    * The id of the category
    */
    'id'?: number;
    /**
    * Title of the category
    */
    'title'?: string;
    /**
    * An example project
    */
    'exampleProject'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "exampleProject",
            "baseName": "example_project",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Category.attributeTypeMap;
    }

    public constructor() {
    }
}


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
* The settings used for the calculation
*/
export class CartResultSettings {
    /**
    * The default split of the compensation between the customer and the store in percent
    */
    'split'?: number;
    /**
    * Specifies whether compensation should be selected by default
    */
    '_default'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "split",
            "baseName": "split",
            "type": "number",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartResultSettings.attributeTypeMap;
    }

    public constructor() {
    }
}


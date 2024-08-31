/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { Product } from '../models/Product';
import { HttpFile } from '../http/http';

/**
* An item in the cart of a specific customer
*/
export class CartItem {
    /**
    * The amount of the product in the cart
    */
    'amount': number;
    /**
    * The total price of the product in the cart
    */
    'total': number;
    'product': Product;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "Product",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartItem.attributeTypeMap;
    }

    public constructor() {
    }
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class Product {
    /**
    * A unique identifier for the product
    */
    'productId': string;
    /**
    * The name of the product
    */
    'name'?: string;
    /**
    * A description of the product
    */
    'description'?: string;
    /**
    * The price of the product
    */
    'price': number;
    /**
    * The categories of the product
    */
    'categories'?: Array<string>;
    /**
    * The tags of the product
    */
    'tags'?: Array<string>;
    /**
    * The weight of the product
    */
    'weight'?: number;
    /**
    * The weight unit of the product
    */
    'weightUnit'?: ProductWeightUnitEnum;
    /**
    * The country of origin of the product
    */
    'madeIn'?: string;
    /**
    * Already know the emissions of the given product? Then you can provide the emission factor here. Unit: **kg CO<sub>2</sub>e**
    */
    'emissionFactor'?: string;
    /**
    * Include the multiplicator of the given factor.
    */
    'emissionMultiplicator'?: ProductEmissionMultiplicatorEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "weightUnit",
            "baseName": "weight_unit",
            "type": "ProductWeightUnitEnum",
            "format": ""
        },
        {
            "name": "madeIn",
            "baseName": "made_in",
            "type": "string",
            "format": ""
        },
        {
            "name": "emissionFactor",
            "baseName": "emission_factor",
            "type": "string",
            "format": ""
        },
        {
            "name": "emissionMultiplicator",
            "baseName": "emission_multiplicator",
            "type": "ProductEmissionMultiplicatorEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Product.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ProductWeightUnitEnum {
    T = 't',
    Kg = 'kg',
    G = 'g',
    Lb = 'lb',
    Lbs = 'lbs',
    Oz = 'oz'
}
export enum ProductEmissionMultiplicatorEnum {
    Price = 'price',
    Amount = 'amount',
    Weight = 'weight'
}


/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { GetOrdersRequestFilters } from '../models/GetOrdersRequestFilters';
import { HttpFile } from '../http/http';

export class GetOrdersRequest {
    /**
    * The operator to combine the filters with
    */
    'operator'?: GetOrdersRequestOperatorEnum;
    'filters'?: GetOrdersRequestFilters;
    /**
    * The maximum amount of orders you want to receive
    */
    'limit'?: number;
    /**
    * The amount of orders you want to skip
    */
    'skip'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "GetOrdersRequestOperatorEnum",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "GetOrdersRequestFilters",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetOrdersRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GetOrdersRequestOperatorEnum {
    And = 'AND',
    Or = 'OR'
}


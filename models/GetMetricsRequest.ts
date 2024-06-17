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

export class GetMetricsRequest {
    /**
    * The operator to combine the filters with
    */
    'operator'?: GetMetricsRequestOperatorEnum;
    'filters'?: GetOrdersRequestFilters;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "GetMetricsRequestOperatorEnum",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "GetOrdersRequestFilters",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetMetricsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GetMetricsRequestOperatorEnum {
    And = 'AND',
    Or = 'OR'
}


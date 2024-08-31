/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class CloudComputingCpuCpuHour {
    'type': CloudComputingCpuCpuHourTypeEnum;
    'activity'?: string;
    'specification'?: CloudComputingCpuCpuHourSpecificationEnum;
    /**
    *  **Hint:** Some specifications only support certain details.
    */
    'detail'?: CloudComputingCpuCpuHourDetailEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need another unit? Contact us!
    */
    'unit'?: CloudComputingCpuCpuHourUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CloudComputingCpuCpuHourTypeEnum",
            "format": ""
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "string",
            "format": ""
        },
        {
            "name": "specification",
            "baseName": "specification",
            "type": "CloudComputingCpuCpuHourSpecificationEnum",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "CloudComputingCpuCpuHourDetailEnum",
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
            "type": "CloudComputingCpuCpuHourUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudComputingCpuCpuHour.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CloudComputingCpuCpuHourTypeEnum {
    CloudComputing = 'cloud_computing'
}
export enum CloudComputingCpuCpuHourSpecificationEnum {
    Aws = 'aws',
    Azure = 'azure',
    Gcp = 'gcp',
    Average = 'average'
}
export enum CloudComputingCpuCpuHourDetailEnum {
    AfSouth1 = 'af-south-1',
    ApEast1 = 'ap-east-1',
    ApNortheast1 = 'ap-northeast-1',
    ApNortheast2 = 'ap-northeast-2',
    ApNortheast3 = 'ap-northeast-3',
    ApSouth1 = 'ap-south-1',
    ApSoutheast1 = 'ap-southeast-1',
    ApSoutheast2 = 'ap-southeast-2',
    CaCentral1 = 'ca-central-1',
    CnNorth1 = 'cn-north-1',
    CnNorthwest1 = 'cn-northwest-1',
    EuCentral1 = 'eu-central-1',
    EuNorth1 = 'eu-north-1',
    EuSouth1 = 'eu-south-1',
    EuWest1 = 'eu-west-1',
    EuWest2 = 'eu-west-2',
    EuWest3 = 'eu-west-3',
    MeSouth1 = 'me-south-1',
    SaEast1 = 'sa-east-1',
    UsEast1 = 'us-east-1',
    UsEast2 = 'us-east-2',
    UsGovEast1 = 'us-gov-east-1',
    UsGovWest1 = 'us-gov-west-1',
    UsWest1 = 'us-west-1',
    UsWest2 = 'us-west-2',
    Average = 'average',
    CentralIndia = 'central-india',
    CentralUs = 'central-us',
    EastAsia = 'east-asia',
    EastUs2 = 'east-us-2',
    EastUs3 = 'east-us-3',
    EastUs = 'east-us',
    NorthCentralUs = 'north-central-us',
    NorthEurope = 'north-europe',
    SouthCentralUs = 'south-central-us',
    SouthIndia = 'south-india',
    SoutheastAsia = 'southeast-asia',
    UkSouth = 'uk-south',
    UkWest = 'uk-west',
    WestCentralUs = 'west-central-us',
    WestEurope = 'west-europe',
    WestIndia = 'west-india',
    WestUs2 = 'west-us-2',
    WestUs3 = 'west-us-3',
    WestUs = 'west-us',
    AsiaEast1 = 'asia-east-1',
    AsiaEast2 = 'asia-east-2',
    AsiaNortheast1 = 'asia-northeast-1',
    AsiaNortheast2 = 'asia-northeast-2',
    AsiaNortheast3 = 'asia-northeast-3',
    AsiaSouth1 = 'asia-south-1',
    AsiaSoutheast1 = 'asia-southeast-1',
    AsiaSoutheast2 = 'asia-southeast-2',
    AustraliaSoutheast1 = 'australia-southeast-1',
    EuropeNorth1 = 'europe-north-1',
    EuropeWest1 = 'europe-west-1',
    EuropeWest2 = 'europe-west-2',
    EuropeWest3 = 'europe-west-3',
    EuropeWest4 = 'europe-west-4',
    EuropeWest6 = 'europe-west-6',
    NorthamericaNortheast1 = 'northamerica-northeast-1',
    SouthamericaEast1 = 'southamerica-east-1',
    UsCentral1 = 'us-central-1',
    UsEast4 = 'us-east-4',
    UsWest3 = 'us-west-3',
    UsWest4 = 'us-west-4'
}
export enum CloudComputingCpuCpuHourUnitEnum {
    CpuHour = 'cpu-hour'
}


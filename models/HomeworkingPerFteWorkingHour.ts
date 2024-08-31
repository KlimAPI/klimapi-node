/**
 * KlimAPI - Calculation & Compensation API
 *
 * This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.
 *
 * KlimAPI Version: v2
 * Contact: tech@klimapi.com
 */

import { HttpFile } from '../http/http';

export class HomeworkingPerFteWorkingHour {
    'type': HomeworkingPerFteWorkingHourTypeEnum;
    'activity'?: HomeworkingPerFteWorkingHourActivityEnum;
    /**
    * The value in the given unit
    */
    'value': number;
    /**
    * Need another unit? Contact us!
    */
    'unit'?: HomeworkingPerFteWorkingHourUnitEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "HomeworkingPerFteWorkingHourTypeEnum",
            "format": ""
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "HomeworkingPerFteWorkingHourActivityEnum",
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
            "type": "HomeworkingPerFteWorkingHourUnitEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HomeworkingPerFteWorkingHour.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum HomeworkingPerFteWorkingHourTypeEnum {
    Homeworking = 'homeworking'
}
export enum HomeworkingPerFteWorkingHourActivityEnum {
    OfficeEquipment = 'office_equipment',
    Heating = 'heating',
    HomeworkingOfficeEquipmentHeating = 'homeworking_office_equipment_+_heating',
    Average = 'average'
}
export enum HomeworkingPerFteWorkingHourUnitEnum {
    PerFteWorkingHour = 'per_fte_working_hour'
}


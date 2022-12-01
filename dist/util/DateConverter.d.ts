import { JsonCustomConvert } from 'json2typescript';
/**
 * Converts ISO-8601 strings to Date objects
 *
 * @private
 * @export
 * @class DateConverter
 * @implements {JsonCustomConvert<Date>}
 */
export declare class DateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any;
    deserialize(date: any): Date;
}

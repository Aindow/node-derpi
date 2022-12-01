import { JsonCustomConvert } from 'json2typescript';
/**
 * Converts the no-protocol URLs returned by Derpibooru to HTTPS URLs
 *
 * @private
 * @export
 * @class URLConverter
 * @implements {JsonCustomConvert<String>}
 */
export declare class URLConverter implements JsonCustomConvert<String> {
    serialize(link: string): any;
    deserialize(link: any): string;
}

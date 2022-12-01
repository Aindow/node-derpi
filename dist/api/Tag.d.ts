import { DefaultFilters } from '../util/DefaultFilters';
/**
 * Represents a page of tag results, as well as a list of various details about a tag
 *
 * @export
 * @class Tag
 */
export declare class Tag {
    /**
     * The ID of this tag
     *
     * @readonly
     * @type {number}
     * @memberof Tag
     */
    readonly id: number;
    /**
     * The category of tags this tag is in
     *
     * @readonly
     * @type {string}
     * @memberof Tag
     */
    readonly category: string;
    /**
     * The description of this tag
     *
     * @readonly
     * @type {string}
     * @memberof Tag
     */
    readonly description: string;
    /**
     * The number of images on this tag
     *
     * @readonly
     * @type {number}
     * @memberof Tag
     */
    readonly imageCount: number;
    /**
     * The name of this tag
     *
     * @readonly
     * @type {string}
     * @memberof Tag
     */
    readonly name: string;
    /**
     * The name of the tag in its namespace (part after the colon)
     *
     * @readonly
     * @type {string}
     * @memberof Tag
     */
    readonly nameInNamespace: string;
    /**
     * The namespace this tag is in (part before the colon)
     *
     * @readonly
     * @type {string}
     * @memberof Tag
     */
    readonly namespace: string;
    /**
     * The sluggified name of this tag
     *
     * @readonly
     * @see Helpers#sluggify
     * @type {string}
     * @memberof Tag
     */
    readonly slug: string;
    /**
     * The image used for spoilering images with this tag
     *
     * @readonly
     * @type {string}
     * @memberof Tag
     */
    readonly spoilerImage: string;
    /**
     * The images on this page of results for this tag
     *
     * @readonly
     * @type {Image[]}
     * @memberof Tag
     */
    /**
     * The next page of results for this tag
     *
     * @type {number}
     * @memberof Tag
     */
    nextPage: number;
    /**
     * The filter ID used for this search
     *
     * @readonly
     * @type {number}
     * @memberof Tag
     */
    filterID: DefaultFilters | number;
    /**
     * Fetches the next page of images on this tag
     *
     * @returns {Promise<Tag>}
     * @memberof Tag
     */
    fetchNextPage(): Promise<Tag>;
}

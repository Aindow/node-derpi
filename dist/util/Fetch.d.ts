/// <reference types="node" />
import { User } from '../api/User';
import { Tag } from '../api/Tag';
import { Image } from '../api/Image';
import { SearchResults } from '../api/SearchResults';
import { ImageComments } from '../api/ImageComments';
import { DefaultFilters } from './DefaultFilters';
import { Stream } from 'stream';
/**
 * Represents various sort formats for results
 *
 * @export
 * @enum {number}
 */
export declare enum ResultSortFormat {
    CREATION_DATE = "created_at",
    LAST_MODIFIED = "updated_at",
    INITIAL_POST_DATE = "first_seen_at",
    SCORE = "score",
    WILSON_SCORE = "wilson",
    RELEVANCE = "relevance",
    WIDTH = "width",
    HEIGHT = "height",
    COMMENTS = "comments",
    TAG_COUNT = "tag_count",
    RANDOM = "random"
}
/**
 * Represents sort orders Derpibooru allows you tu sort results by
 *
 * @export
 * @enum {number}
 */
export declare enum ResultSortOrder {
    ASCENDING = "asc",
    DESCENDING = "desc"
}
/**
 * Represents various options used for searching for images
 *
 * @export
 * @interface SearchOptions
 */
export interface SearchOptions {
    /**
     * The query to match against
     *
     * See https://derpibooru.org/search/syntax for syntax help
     *
     * @type {string}
     * @memberof SearchOptions
     */
    query?: string;
    /**
     * The sort format to use
     *
     * @type {ResultSortFormat}
     * @memberof SearchOptions
     */
    sortFormat?: ResultSortFormat;
    /**
     * The order to sort the results in
     *
     * @type {ResultSortOrder}
     * @memberof SearchOptions
     */
    sortOrder?: ResultSortOrder;
    /**
     * The page number of results to fetch
     *
     * @type {number}
     * @memberof SearchOptions
     */
    page?: number;
    /**
     * The filter ID to use for this request
     *
     * @type {number}
     * @memberof SearchOptions
     */
    filterID?: DefaultFilters | number;
}
export interface ReverseImageSearchOptions {
    /**
     * Your Derpi API key (required if image is set)
     *
     * Get yours at https://derpibooru.org/users/edit
     *
     * @type {string}
     * @memberof ReverseImageSearchOptions
     */
    key?: string;
    /**
     * The data representing your image
     *
     * Accepts any type supported by https://github.com/form-data/form-data
     *
     * @type {Buffer|Stream}
     * @memberof ReverseImageSearchOptions
     */
    image?: Buffer | Stream;
    /**
     * The URL to your image, if you don't have it as a file
     *
     * @type {string}
     * @memberof ReverseImageSearchOptions
     */
    url?: string;
    /**
     * The fuzziness value to use to search with (between 0.2 and 0,5)
     *
     * @type {number}
     * @memberof ReverseImageSearchOptions
     */
    fuzziness?: number;
}
/**
 * Various functions for fetching information from Derpibooru
 *
 * @export
 * @class Fetch
 */
export declare class Fetch {
    private static jsonConvert;
    private static userIDToURLMap;
    /**
     * Sets up some basic settings for the Fetch instance
     *
     * YOU SHOULD NOT NEED TO CALL THIS YOURSELF. IT IS DONE AT MODULE INITIALIZATION TIME.
     *
     * @static
     * @memberof Fetch
     */
    static setup(): void;
    /**
     * Fetches an image and its associated details
     *
     * @static
     * @param {string} id The ID of the image to fetch
     * @returns {Promise<Image>} A Promise wrapping the fetched image
     * @memberof Fetch
     */
    static fetchImage(id: string | number): Promise<Image>;
    /**
     * Fetches a user and their associated details by name
     *
     * @static
     * @param {string} identifier The username of the user to fetch
     * @returns {Promise<User>} A Promise wrapping the fetched user
     * @memberof Fetch
     */
    static fetchUser(username: string): Promise<User>;
    /**
     * Fetches a user and its associated details by ID
     *
     * THIS IS A VERY VERY VERY DIRTY HACK, BUT DERPIBOORU'S API DESIGN REQUIRES ITS EXISTENCE!
     * I'M SORRY!
     *
     * @static
     * @param {number} id The ID of the user to fetch
     * @returns {Promise<Tag>} A Promise wrapping the fetched user
     * @memberof Fetch
     */
    static fetchUserByID(id: number): Promise<User>;
    /**
     * Fetches a tag and its associated details by name
     *
     * @static
     * @param {string} identifier The name of the tag to fetch
     * @param {number} [page] The page of images to fetch
     * @param {filterID} [filterID] The filter ID to apply to results
     * @returns {Promise<Tag>} A Promise wrapping the fetched tag
     * @memberof Fetch
     */
    static fetchTag(name: string, page?: number, filterID?: DefaultFilters | number): Promise<Tag>;
    /**
     * Fetches a tag and its associated details by ID
     *
     * @static
     * @param {number} id The ID of the tag to fetch
     * @param {number} [page] The page of images to fetch
     * @param {filterID} [filterID] The filter ID to apply to results
     * @returns {Promise<Tag>} A Promise wrapping the fetched tag
     * @memberof Fetch
     */
    static fetchTagByID(id: number, page?: number, filterID?: DefaultFilters | number): Promise<Tag>;
    /**
     * Searches for a set of images matching the given query
     *
     * @static
     * @see SearchOptions
     * @param {SearchOptions} searchOptions The options to search with
     * @returns {Promise<SearchResults>} A Promise wrapping the search results
     * @memberof Fetch
     */
    static search(searchOptions: SearchOptions): Promise<SearchResults>;
    /**
     * Fetches the comments on an image
     *
     * @static
     * @param {number} imageID The ID of the image to fetch comments from
     * @param {(number)} [page] The page of comments to fetch
     * @returns {Promise<ImageComments>}
     * @memberof Fetch
     */
    static fetchComments(imageID: number, page?: number): Promise<ImageComments>;
    /**
     * Boilerplate to fetch JSON data from Derpibooru
     *
     * @static
     * @private
     * @param {request.UriOptions} options Options for the request
     * @returns {Promise<any>} A Promise wrapping the returned data
     * @memberof Fetch
     */
    private static fetchJSON;
}

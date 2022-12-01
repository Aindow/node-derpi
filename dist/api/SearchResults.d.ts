import { Image } from './Image';
import { ResultSortFormat, ResultSortOrder } from '../util/Fetch';
import { DefaultFilters } from '../util/DefaultFilters';
/**
 * Represents a page of search results
 *
 * @export
 * @class SearchResults
 */
export declare class SearchResults {
    /**
     * The images on this page of results
     *
     * @readonly
     * @type {Image[]}
     * @memberof SearchResults
     */
    readonly images: Image[];
    /**
     * The total number of images returned by this search
     *
     * @readonly
     * @type {number}
     * @memberof SearchResults
     */
    readonly total: number;
    /**
     * The query used to perform this search
     *
     * @type {string}
     * @memberof SearchResults
     */
    query: string;
    /**
     * The sort format used on this search
     *
     * @type {ResultSortFormat}
     * @memberof SearchResults
     */
    sortFormat: ResultSortFormat;
    /**
     * The sort order used on this search
     *
     * @type {ResultSortOrder}
     * @memberof SearchResults
     */
    sortOrder: ResultSortOrder;
    /**
     * The next page of results
     *
     * @readonly
     * @see fetchNextPage
     * @type {number}
     * @memberof SearchResults
     */
    nextPage: number;
    /**
     * The filter ID used for this search
     *
     * @readonly
     * @type {number}
     * @memberof SearchResults
     */
    filterID: DefaultFilters | number;
    /**
     * Fetches the next page of results
     *
     * @returns {SearchResults}
     * @memberof SearchResults
     */
    fetchNextPage(): Promise<SearchResults>;
}

import { Comment } from './Comment';
/**
 * Represents a page of comments on an image
 *
 * @export
 * @class ImageComments
 */
export declare class ImageComments {
    /**
     * The comments on this page
     *
     * @readonly
     * @type {Comment[]}
     * @memberof ImageComments
     */
    readonly comments: Comment[];
    /**
     * The total number of comments on the image
     *
     * @readonly
     * @type {number}
     * @memberof ImageComments
     */
    readonly total: number;
    /**
     * The index of the next page of comments
     *
     * @type {number}
     * @memberof ImageComments
     */
    nextPage: number;
    /**
     * The internal ID of the image these comments were posted on
     *
     * @type {number}
     * @memberof ImageComments
     */
    imageID: number;
    /**
     * Retrieves the next page of comments
     *
     * @returns {Promise<ImageComments>} The next page of comments (note that comments might be empty if you go over too many pages)
     * @memberof ImageComments
     */
    fetchNextPage(): Promise<ImageComments>;
}
